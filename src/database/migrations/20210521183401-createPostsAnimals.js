'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('posts_animals', {
      post_id: {
        type: Sequelize.BIGINT,
        primaryKey: true,
        allowNull: false,
        references: { model: 'posts', key: 'id' }
      },
      animal_id: {
        type: Sequelize.BIGINT,
        primaryKey: true,
        allowNull: false,
        references: { model: 'animals', key: 'id' }
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('posts_animals');
  }
};
