'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('posts', {
      id: {
        type: Sequelize.BIGINT,
        primaryKey: true,
        autoIncrement: true
      },
      institute_id: {
        type: Sequelize.BIGINT,
        allowNull: false,
        references: { model: 'profiles', key: 'id' }
      },
      description: {
        type: Sequelize.STRING,
        allowNull: true
      },
      content: {
        type: Sequelize.JSON,
        allowNull: false
      },
      has_animals: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      likes_count: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      comments_count: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('posts');
  }
};
