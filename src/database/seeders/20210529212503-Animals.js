'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('animals', [
      {
        institute_id: 2,
        name: 'Angel',
        birthdate: '2015-04-07',
        profile_picture: 'http://vps23248.publiccloud.com.br:9002/animals/830140c8-bb39-4809-84df-5f59850cf49a.png',
        breed_id: 'DOG_JAPANESE_SPITZ',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        institute_id: 2,
        name: 'Doris',
        birthdate: '2018-11-03',
        profile_picture: 'http://vps23248.publiccloud.com.br:9002/animals/6ddf94c7-6cb5-49d4-b584-ba7e322b91dc.png',
        breed_id: 'DOG_GOLDEN_RETRIEVER',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        institute_id: 2,
        name: 'Joca',
        birthdate: '2016-07-22',
        profile_picture: 'http://vps23248.publiccloud.com.br:9002/animals/4314d8aa-8e0c-437c-8b00-0b9991dd2683.png',
        breed_id: 'DOG_UNDEFINED',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        institute_id: 2,
        name: 'Lucca',
        birthdate: '2020-01-18',
        profile_picture: 'http://vps23248.publiccloud.com.br:9002/animals/de90f6f1-a528-4ba3-ab09-4e3eb0b2dc9e.png',
        breed_id: 'DOG_GOLDEN_RETRIEVER',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        institute_id: 2,
        name: 'Maria',
        birthdate: '2013-02-15',
        profile_picture: 'http://vps23248.publiccloud.com.br:9002/animals/084e70a0-b1bf-4a72-a333-16e2364d9027.png',
        breed_id: 'DOG_UNDEFINED',
        created_at: new Date(),
        updated_at: new Date()
      }
    ], {});
  }
};
