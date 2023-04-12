const {inventory, item} = require('../models');

class InventoryRepository {    
    async createInventory(data) {
        return await inventory.create(data);
    }
    
    async getInventoryByItemId(item_id) {
        return await inventory.findOne({
            where: {
                item_id: item_id
            },
            include: {
                model: item,
                attributes: ['name']
            }
        });
    }
    
    async getAllInventory() {
        return await inventory.findAll({
            include: {
                model: item,
                attributes: ['name']
            }
        });
    }
    
    async updateInventory(id, data) {
        return await inventory.update(data, {
        where: {
            item_id: id
        }
        });
    }
    
    async deleteInventory(id) {
        return await inventory.destroy({
        where: {
            id: id
        }
        });
    }
}

module.exports = new InventoryRepository();