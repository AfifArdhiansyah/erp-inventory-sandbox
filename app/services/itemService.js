const ItemRepository = require('../repositories/itemRepository');
const {generateIdItem} = require('../utils/generateId');
const itemInput = require('../dataTypes/itemInputDataType');

class ItemService {
    async getAll() {
        return await ItemRepository.getAll();
    }

    async getById(id) {
        return await ItemRepository.getById(id);
    }

    async create(item) {
        try{
            const data = itemInput;
            data.name = item.name;
            data.category = item.category;
            data.modal = item.modal;
            if(item.category == 'produk jadi'){
                data.sale_price = item.price;
                data.sale_unit = item.buy;
                data.id = generateIdItem(item.modal);
            }
            else if(item.category == 'bahan material'){
                data.buy_price = item.price;
                data.buy_unit = item.unit;
                data.lead_time = item.lead_time;
                data.lead_unit = item.lead_unit;
                data.id = generateIdItem(item.modal);
            }
            else{
                return {
                    status: 'error',
                    message: 'Category not found'
                };
            }
            const items = await ItemRepository.create(data);
            return items;
        }
        catch(err){
            return err;
        }
        
    }

    async update(id, item) {
        return await ItemRepository.update(id, item);
    }

    async delete(id) {
        return await ItemRepository.delete(id);
    }
}

module.exports = new ItemService();