const inventoryService = require('../services/inventoryService');

class InventoryController{
    async createInventory(req, res) {
        const data = req.body;
        const inventory = await inventoryService.createInventory(data);
        res.status(201).json({
            status: 'success',
            message: 'Inventory created successfully',
            data: inventory
        });
    }

    async getInventoryByItemId(req, res) {
        const item_id = req.params.id;
        const inventory = await inventoryService.getInventoryByItemId(item_id);
        res.status(200).json({
            status: 'success',
            message: 'Inventory fetched successfully',
            data: inventory
        });
    }

    async getAllInventory(req, res) {
        const inventory = await inventoryService.getAllInventory();
        res.status(200).json({
            status: 'success',
            message: 'Inventory fetched successfully',
            data: inventory
        });
    }

    async updateInventory(req, res) {
        const id = req.params.id;
        const data = req.body;
        const inventory = await inventoryService.updateInventory(id, data);
        res.status(200).json({
            status: 'success',
            message: 'Inventory updated successfully',
            data: inventory
        });
    }

    async deleteInventory(req, res) {
        const id = req.params.id;
        const inventory = await inventoryService.deleteInventory(id);
        res.status(200).json({
            status: 'success',
            message: 'Inventory deleted successfully',
            data: inventory
        });
    }
}

module.exports = new InventoryController();