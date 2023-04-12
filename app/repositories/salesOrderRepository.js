const {sales_order, sales_order_detail, item, bom_parent, bom_child} = require('../models');

class SalesOrderRepository{
    async getSalesOrderByID(id){
        return await sales_order.findOne({
            where: {id: id},
            include: [
                {
                    model: sales_order_detail,
                    attributes: ['id', 'quantity', 'total'],
                    include: [
                        {
                            model: item,
                            attributes: ['id', 'name', 'category'],
                            include: [
                                {
                                    model: bom_parent,
                                    attributes: ['id'],
                                    include: [
                                        {
                                            model: bom_child,
                                            attributes: ['id_child_item', 'quantity']
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        });
    }

    async createSalesOrder(salesOrder){
        return await sales_order.create(salesOrder);
    }

    async createSalesOrderDetail(salesOrderDetail){
        return await sales_order_detail.create(salesOrderDetail);
    }
}

module.exports = new SalesOrderRepository();