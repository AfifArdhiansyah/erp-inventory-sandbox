const {purchase_request, item_purchase_request, item} = require('../models');

class PurchaseRequestRepository{
    async getPurchaseRequestById(id){
        const purchaseRequest = await purchase_request.findOne({
            where: {id:id},
            include: [
                {
                    model: item_purchase_request,
                    attributes: ['id', 'quantity', 'ordered'],
                    include: [
                        {
                            model: item,
                            attributes: ['name', 'buy_unit', 'buy_price']
                        }
                    ]
                }
            ]
        });
        return purchaseRequest;
    }

    async createPurchaseRequest(purchaseRequest){
        const newPurchaseRequest = await purchase_request.create(purchaseRequest);
        return newPurchaseRequest;
    }

    async createItemPurchaseRequest(itemPurchaseRequest){
        const newItemPurchaseRequest = await item_purchase_request.create(itemPurchaseRequest);
        return newItemPurchaseRequest;
    }
}

module.exports = new PurchaseRequestRepository();