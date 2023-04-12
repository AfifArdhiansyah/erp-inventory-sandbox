'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      item.hasOne(models.inventory, {
        foreignKey: 'item_id',
      });
      item.hasOne(models.bom_parent, {
        foreignKey: 'id_parent_item',
      });
      item.hasMany(models.bom_child, {
        foreignKey: 'id_child_item',
      });
      item.hasMany(models.sales_order_detail, {
        foreignKey: 'id_item',
      });
      item.hasMany(models.item_purchase_request, {
        foreignKey: 'id_item',
      });
    }
  }
  item.init({
    name: DataTypes.STRING,
    category: DataTypes.STRING,
    modal: DataTypes.STRING,
    sale_price: DataTypes.STRING,
    sale_unit: DataTypes.STRING,
    buy_price: DataTypes.STRING,
    buy_unit: DataTypes.STRING,
    lead_time: DataTypes.INTEGER,
    lead_unit: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'item',
  });
  return item;
};