'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('sales_order_details', {
      id: {
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      id_sales_order: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
          model: 'sales_orders',
          key: 'id',
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE'
        },
      },
      id_item: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
          model: 'items',
          key: 'id',
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE'
        },
      },
      quantity: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      total: {
        type: Sequelize.FLOAT,
        allowNull: false
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
    await queryInterface.dropTable('sales_order_details');
  }
};