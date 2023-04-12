'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class bom_parent extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      bom_parent.belongsTo(models.item, {
        foreignKey: 'id_parent_item',
      });
      bom_parent.hasMany(models.bom_child, {
        foreignKey: 'id_bom_parent',
      });
    }
  }
  bom_parent.init({
    id_parent_item: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'bom_parent',
  });
  return bom_parent;
};