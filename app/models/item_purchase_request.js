'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class item_purchase_request extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      item_purchase_request.belongsTo(models.purchase_request, {
        foreignKey: 'id_purchase_request',
      });
      item_purchase_request.belongsTo(models.item, {
        foreignKey: 'id_item',
      });
    }
  }
  item_purchase_request.init({
    id_purchase_request: DataTypes.STRING,
    id_item: DataTypes.STRING,
    quantity: DataTypes.INTEGER,
    ordered: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'item_purchase_request',
  });
  return item_purchase_request;
};