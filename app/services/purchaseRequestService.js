const PurchaseRequestRepository = require('../repositories/purchaseRequestRepository');
const {generatePurchaseRequestId, generatePurchaseRequestDetailId} = require('../utils/generateId');

class PurchaseRequestService{
    async getPurchaseRequestById(id){
        try{
            const purchaseRequest = await PurchaseRequestRepository.getPurchaseRequestById(id);
            return purchaseRequest;
        }
        catch(err){
            throw err;
        }
    }

    async createPurchaseRequest(data){
        try{
            data.id = generatePurchaseRequestId();
            const newPurchaseRequest = await PurchaseRequestRepository.createPurchaseRequest(data);
            data.items.forEach(async item => {
                item.id = generatePurchaseRequestDetailId(data.id);
                item.id_purchase_request = data.id;
                await PurchaseRequestRepository.createItemPurchaseRequest(item);
            });
            return newPurchaseRequest;
        }
        catch(err){
            throw err;
        }
    }
}

module.exports = new PurchaseRequestService();