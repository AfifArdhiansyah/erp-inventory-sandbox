'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class purchase_order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      purchase_order.hasOne(models.purchase_request, {
        foreignKey: 'id_purchase_request'
      })
    }
  }
  purchase_order.init({
    id_purchase_request: DataTypes.STRING,
    supplier: DataTypes.STRING,
    total: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'purchase_order',
  });
  return purchase_order;
};