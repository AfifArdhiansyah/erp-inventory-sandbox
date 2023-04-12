'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class inventory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      inventory.belongsTo(models.item,{
        foreignKey: 'item_id',
      });
    }
  }
  inventory.init({
    item_id: DataTypes.STRING,
    quantity: DataTypes.FLOAT,
    item_unit: DataTypes.STRING,
    daily_consume: DataTypes.FLOAT,
    safety_stock: DataTypes.FLOAT,
    reorder_point: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'inventory',
  });
  return inventory;
};