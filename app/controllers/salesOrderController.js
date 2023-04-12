const SalesOrderService = require('../services/salesOrderService');

class SalesOrderController{
    async getSalesOrderByID(req, res){
        await SalesOrderService.getSalesOrderByID(req.params.id)
        .then((result) => {
            res.status(200).json(result);
        })
        .catch((err) => {
            res.status(500).json(err);
        });
    }

    async createSalesOrder(req, res){
        await SalesOrderService.createSalesOrder(req.body)
        .then((result) => {
            res.status(200).json(result);
        })
        .catch((err) => {
            res.status(500).json(err);
        });
    }
}

module.exports = new SalesOrderController();