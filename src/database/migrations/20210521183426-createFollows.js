'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('follows', {
      profile_id: {
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull: false,
        references: { model: 'profiles', key: 'id' }
      },
      institute_id: {
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull: false,
        references: { model: 'profiles', key: 'id' }
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('follows');
  }
};
