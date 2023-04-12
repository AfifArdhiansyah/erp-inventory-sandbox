const router = require('express').Router();
const bomController = require('../controllers/bomController');

router.get('/:id', bomController.getBomByParentId);
router.post('/', bomController.createBom);

module.exports = router;