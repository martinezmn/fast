'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('breeds', {
      id: {
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull: false
      },
      specie: {
        type: Sequelize.STRING,
        allowNull: false
      },
      breed: {
        type: Sequelize.STRING,
        allowNull: false
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('breeds');
  }
};
