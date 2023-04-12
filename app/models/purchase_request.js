'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class purchase_request extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      purchase_request.hasMany(models.item_purchase_request, {
        foreignKey: 'id_purchase_request',
      });
    }
  }
  purchase_request.init({
  }, {
    sequelize,
    modelName: 'purchase_request',
  });
  return purchase_request;
};