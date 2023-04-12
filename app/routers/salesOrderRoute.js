const router = require('express').Router();
const salesOrderController = require('../controllers/salesOrderController');

router.get('/:id', salesOrderController.getSalesOrderByID);
router.post('/', salesOrderController.createSalesOrder);

module.exports = router;