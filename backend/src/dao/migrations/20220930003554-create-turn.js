'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('turns', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      estimated_time: {
        type: Sequelize.INTEGER
      },
      total_time: {
        type: Sequelize.INTEGER
      },
      turn_date: {
        type: Sequelize.INTEGER
      },
      food_id: {
        type: Sequelize.INTEGER,
        references:{
          model: "food",
          key: "id"
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
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
    await queryInterface.dropTable('turns');
  }
};