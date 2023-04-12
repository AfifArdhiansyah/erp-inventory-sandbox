const InventoryRepository = require('../repositories/inventoryRepository');
const ItemService = require('./itemService');
const calculate = require('../utils/calculate');

class InventoryService {
    async createInventory(data) {
        const item = await ItemService.getById(data.item_id);
        if(!item){
            return {
                status: 'error',
                message: 'Item not found'
            };
        }
        const itemLeadTime = item.lead_time;
        const rop = calculate.calReorderPoint(itemLeadTime, data.safety_stock, data.daily_consume);
        data.reorder_point = rop;
        return await InventoryRepository.createInventory(data);
    }

    async getInventoryByItemId(item_id) {
        const inventory = await InventoryRepository.getInventoryByItemId(item_id);
        return inventory;
    }

    async getAllInventory() {
        return await InventoryRepository.getAllInventory();
    }

    async updateInventory(item_id, data) {
        return await InventoryRepository.updateInventory(item_id, data);
    }

    async deleteInventory(id) {
        return await InventoryRepository.deleteInventory(id);
    }
}

module.exports = new InventoryService();