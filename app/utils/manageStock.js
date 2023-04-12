const inventoryService = require('../services/inventoryService')
const purchaseRequestService = require('../services/purchaseRequestService');
const bomService = require('../services/bomService');
const PurchaseRequestData = require('../dataTypes/purchaseRequestData');

const needToRestock = (quantity, reorder_point) => {
    if(quantity <= reorder_point){
        return true;
    }
    return false;
}

const updateInventory = async (bom_children, purchaseRequestData, quantity) => {
    await bom_children.forEach(async (child) => {
        const itemInventory = await inventoryService.getInventoryByItemId(child.item.id);
        const newQuantity = itemInventory.quantity - (child.quantity * quantity);
        const updateData = {
            quantity: newQuantity
        }
        if(needToRestock(newQuantity, itemInventory.reorder_point)){
            purchaseRequestData.addData({
                id_item: child.item.id,
                quantity: itemInventory.reorder_point //ganti ke eoq kalau udah ada eoq
            });
        }
        await inventoryService.updateInventory(child.item.id, updateData);
    });
    return purchaseRequestData;
}

const updateAfterSales = async (id_product, quantity) => {
    const bom = await bomService.getBomByParentId(id_product);
    const purchaseRequestData = new PurchaseRequestData();
    const data = await updateInventory(bom.bom_children, purchaseRequestData, quantity)
    if(data.getData().length > 0){
        //create purchase request
        const newPurchaseRequestData = {
            items : data.getData()
        }
        await purchaseRequestService.createPurchaseRequest(newPurchaseRequestData);
    }
    
}

module.exports = {
    needToRestock,
    updateAfterSales
};