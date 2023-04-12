const router = require('express').Router();
const PurchaseRequestController = require('../controllers/purchaseRequestController');

router.get('/:id', PurchaseRequestController.getPurchaseRequestById);
router.post('/', PurchaseRequestController.createPurchaseRequest);

module.exports = router;