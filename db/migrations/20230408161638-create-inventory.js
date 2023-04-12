'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('inventories', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      item_id: {
        type: Sequelize.STRING,
        references: {
          model: 'items',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        unique: true
      },
      quantity: {
        type: Sequelize.FLOAT,
        defaultValue: 0
      },
      item_unit: {
        type: Sequelize.STRING,
      },
      daily_consume: {
        type: Sequelize.FLOAT,
        allowNull: true
      },
      safety_stock: {
        type: Sequelize.FLOAT,
        allowNull: true
      },
      reorder_point: {
        type: Sequelize.FLOAT,
        defaultValue: 0
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('inventories');
  }
};