'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class sales_order_detail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      sales_order_detail.belongsTo(models.sales_order, {
        foreignKey: 'id_sales_order'
      });
      sales_order_detail.belongsTo(models.item, {
        foreignKey: 'id_item'
      });
    }
  }
  sales_order_detail.init({
    id_sales_order: DataTypes.STRING,
    id_item: DataTypes.STRING,
    quantity: DataTypes.INTEGER,
    total: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'sales_order_detail',
  });
  return sales_order_detail;
};