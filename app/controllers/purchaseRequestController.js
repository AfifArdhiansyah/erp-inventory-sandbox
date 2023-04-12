const PurchaseRequestService = require('../services/purchaseRequestService');

class PurchaseRequestController{
    async getPurchaseRequestById(req, res){
        try{
            const purchaseRequest = await PurchaseRequestService.getPurchaseRequestById(req.params.id);
            res.status(200).json(purchaseRequest);
        }
        catch(err){
            res.status(500).json(err);
        }
    }

    async createPurchaseRequest(req, res){
        try{
            const newPurchaseRequest = await PurchaseRequestService.createPurchaseRequest(req.body);
            res.status(200).json(newPurchaseRequest);
        }
        catch(err){
            res.status(500).json(err);
        }
    }
}

module.exports = new PurchaseRequestController();