'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('animals', {
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
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      birthdate: {
        type: Sequelize.DATEONLY,
        allowNull: false
      },
      profile_picture: {
        type: Sequelize.STRING,
        allowNull: false
      },
      breed_id: {
        type: Sequelize.STRING,
        allowNull: false,
        references: { model: 'breeds', key: 'id' }
      },
      posts_count: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('animals');
  }
};
