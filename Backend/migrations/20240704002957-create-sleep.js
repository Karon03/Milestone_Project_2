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
      day: {
        type: Sequelize.STRING,
        allowNull: false
      },
      start_sleep: {
        type: Sequelize.DATE,
        allowNull: false
      },
      stop_sleep: {
        type: Sequelize.DATE,
        allowNull: false
      },
      start_interruption: {
        type: Sequelize.DATE,
        allowNull: false
      },
      stop_interruption: {
        type: Sequelize.DATE,
        allowNull: false
      }
  })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('sleep')
  }
};