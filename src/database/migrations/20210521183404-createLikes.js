'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('likes', {
      profile_id: {
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull: false,
        references: { model: 'profiles', key: 'id' }
      },
      post_id: {
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull: false,
        references: { model: 'posts', key: 'id' }
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('likes');
  }
};
