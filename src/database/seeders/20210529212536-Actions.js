'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('subscribers', [
      {
        profile_id: 1,
        institute_id: 2,
        renewed_at: new Date(),
        created_at: new Date()
      }
    ], {});

    await queryInterface.bulkInsert('follows', [
      {
        profile_id: 1,
        institute_id: 2,
        created_at: new Date()
      }
    ], {});

    await queryInterface.bulkInsert('likes', [
      {
        profile_id: 1,
        post_id: 6,
        created_at: new Date()
      }
    ], {});

    await queryInterface.bulkInsert('comments', [
      {
        profile_id: 1,
        post_id: 6,
        comment: 'Foto bonita, gostei',
        created_at: new Date()
      },
      {
        profile_id: 1,
        post_id: 6,
        comment: 'Gostei e curti',
        created_at: new Date()
      }
    ], {});
  }
};
