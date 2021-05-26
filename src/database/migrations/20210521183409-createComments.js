'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('comments', {
      id: {
        type: Sequelize.BIGINT,
        primaryKey: true,
        autoIncrement: true
      },
      profile_id: {
        type: Sequelize.BIGINT,
        allowNull: false,
        references: { model: 'profiles', key: 'id' }
      },
      post_id: {
        type: Sequelize.BIGINT,
        allowNull: false,
        references: { model: 'posts', key: 'id' }
      },
      comment: {
        type: Sequelize.STRING,
        allowNull: false
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('comments');
  }
};
