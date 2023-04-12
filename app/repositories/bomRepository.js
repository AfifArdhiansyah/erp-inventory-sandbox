const {bom_child, bom_parent, item} = require('../models');

class BomRepository {
  async getBomByParentId(id) {
    const bom = await bom_parent.findOne({
      where: {
        id_parent_item: id
      },
      include: [{
        model: bom_child,
        attributes: ['quantity'],
        include: [{
          model: item,
          attributes: ['id', 'name', 'category']
        }]
      },
      {
        model: item,
        attributes: ['name', 'category']
      }
    ]
    });
    return bom;
  }

  async createParentBom(bom) {
    const bomCreated = await bom_parent.create(bom);
    return bomCreated;
  }

  async createChildBom(bom) {
    const bomCreated = await bom_child.create(bom);
    return bomCreated;
  }
}

module.exports = new BomRepository();