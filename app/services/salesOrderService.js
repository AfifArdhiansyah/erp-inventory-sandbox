const SalesOrderRepository = require('../repositories/salesOrderRepository');
const ItemService = require('./itemService');
const {generateSalesOrderId, generateSalesOrderDetailId} = require('../utils/generateId');
const {calTotalOrderCost} = require('../utils/calculate');
const {updateQuantityAfterSales} = require('../utils/manageStock');

class SalesOrderService{
    async getSalesOrderByID(id){
        try{
            return await SalesOrderRepository.getSalesOrderByID(id);
        }
        catch(err){
            throw err;
        }
    }

    async createSalesOrder(salesOrderData){
        try{
            salesOrderData.id = generateSalesOrderId();
            const salesOrder = await SalesOrderRepository.createSalesOrder(salesOrderData);
            salesOrderData.products.forEach(async (salesOrderDetail) => {
                salesOrderDetail.id = generateSalesOrderDetailId(salesOrderData.id);
                const item = await ItemService.getById(salesOrderDetail.id_item);
                salesOrderDetail.total = calTotalOrderCost(item.sale_price, salesOrderDetail.quantity);
                salesOrderDetail.id_sales_order = salesOrderData.id;
                await SalesOrderRepository.createSalesOrderDetail(salesOrderDetail);
                await updateAfterSales(salesOrderDetail.id_item, salesOrderDetail.quantity);
            });
            return salesOrder;
        }
        catch(err){
            throw err;
        }
    }
}

module.exports = new SalesOrderService();