const bomRepository = require('../repositories/bomRepository');
const {generateBomId} = require('../utils/generateId');

class BomService {
    async getBomByParentId(id) {
        const bom = await bomRepository.getBomByParentId(id);
        return bom;
    }

    async createBom(data) {
        data.id = generateBomId();
        const bomParent = await bomRepository.createParentBom(data)
        data.bom_child.forEach(async (child) => {
            child.id_bom_parent = data.id;
            await bomRepository.createChildBom(child);
        });
        return bomParent;
    }
}

module.exports = new BomService();
