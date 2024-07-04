'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('sleep', {
      sleep_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      start_sleep: {
        type: DataTypes.STRING,
        allowNull: false
      },
      stop_sleep: {
        type: DataTypes.DATE,
        allowNull: false
      },
      start_interruption: {
        type: DataTypes.DATE,
        allowNull: false
      },
      stop_interruption: {
        type: DataTypes.DATE,
        allowNull: false
      }
  })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('sleep')
  }
};