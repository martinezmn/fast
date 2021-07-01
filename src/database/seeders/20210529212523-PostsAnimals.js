'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('posts_animals', [
      {
        post_id: 1,
        animal_id: 1,
      },
      {
        post_id: 3,
        animal_id: 3,
      },
      {
        post_id: 5,
        animal_id: 5
      },
      {
        post_id: 5,
        animal_id: 3
      }
    ], {});
  }
};
