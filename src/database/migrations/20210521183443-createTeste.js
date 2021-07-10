'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('teste', {
      post_id: {
        type: Sequelize.BIGINT,
        primaryKey: true,
        allowNull: false,
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('teste');
  }
};
