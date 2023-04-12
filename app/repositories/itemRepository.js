const {item} = require('../models');

class ItemRepository {
    async getAll() {
        return await item.findAll();
    }

    async getById(id) {
        return await item.findByPk(id);
    }

    async create(data) {
        return await item.create(data);
    }

    async update(id, item) {
        return await item.update(item, {where: {id: id}});
    }

    async delete(id) {
        return await item.destroy({where: {id: id}});
    }
}

module.exports = new ItemRepository();