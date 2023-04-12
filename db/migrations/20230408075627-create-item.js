'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('items', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING,
        unique: true
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      category: {
        type: Sequelize.STRING,
        allowNull: false
      },
      modal: {
        type: Sequelize.STRING,
        allowNull: false
      },
      sale_price: {
        type: Sequelize.STRING,
        allowNull: true
      },
      sale_unit: {
        type: Sequelize.STRING,
        allowNull: true
      },
      buy_price: {
        type: Sequelize.STRING,
        allowNull: true
      },
      buy_unit: {
        type: Sequelize.STRING,
        allowNull: true
      },
      lead_time: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      lead_unit: {
        type: Sequelize.STRING,
        allowNull: true
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
    await queryInterface.dropTable('items');
  }
};