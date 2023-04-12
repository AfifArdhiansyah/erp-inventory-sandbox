'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class bom_child extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      bom_child.belongsTo(models.bom_parent, {
        foreignKey: 'id_bom_parent',
      });
      bom_child.belongsTo(models.item, {
        foreignKey: 'id_child_item',
      });
    }
  }
  bom_child.init({
    id_bom_parent: DataTypes.STRING,
    id_child_item: DataTypes.STRING,
    quantity: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'bom_child',
  });
  return bom_child;
};