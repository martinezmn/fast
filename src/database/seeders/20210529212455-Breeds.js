'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('breeds', [
      {
        id: 'DOG_UNDEFINED',
        specie: 'Cachorro',
        breed: 'Vira-lata'
      },
      {
        id: 'DOG_JAPANESE_SPITZ',
        specie: 'Cachorro',
        breed: 'Spitz japonês'
      },
      {
        id: 'DOG_GOLDEN_RETRIEVER',
        specie: 'Cachorro',
        breed: 'Golden retriever'
      }
    ], {});
  }
};
