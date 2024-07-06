'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('sleep', {
      sleep_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      start_sleep: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      stop_sleep: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      start_interruption: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      stop_interruption: {
        type: Sequelize.INTEGER,
        allowNull: false
      }
  })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('sleep')
  }
};