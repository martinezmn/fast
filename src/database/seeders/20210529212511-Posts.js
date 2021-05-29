'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('posts', [
      {
        institute_id: 2,
        animal_id: 1,
        description: 'Felizão hoje',
        content: '["http://vps23248.publiccloud.com.br:9002/posts/6b4f505a-4be3-48a5-a5e1-1249c1e03ef5.png"]',
        created_at: new Date()
      },
      {
        institute_id: 2,
        description: 'Aceitamos doações, obrigado!',
        content: '["http://vps23248.publiccloud.com.br:9002/posts/28dc41f0-d42a-478c-bce2-5f3ba92af1b6.png"]',
        created_at: new Date()
      },
      {
        institute_id: 2,
        animal_id: 3,
        content: '["http://vps23248.publiccloud.com.br:9002/posts/71ac4d73-3f44-44c4-94f2-a480d9df66ef.png"]',
        created_at: new Date()
      },
      {
        institute_id: 2,
        description: 'Post com duas fotos',
        content: '["http://vps23248.publiccloud.com.br:9002/posts/d786b2dd-4c2b-4c1c-8be4-389f55044117.png","http://vps23248.publiccloud.com.br:9002/posts/e89968e1-ef81-4b3e-a8ae-3b453c293a8a.png"]',
        created_at: new Date()
      },
      {
        institute_id: 2,
        animal_id: 5,
        description: 'Olha eu que lindo',
        content: '["http://vps23248.publiccloud.com.br:9002/posts/fd28bc77-d4df-42f5-9a8d-2d3404c6084c.png"]',
        created_at: new Date()
      },
      {
        institute_id: 2,
        animal_id: 5,
        content: '["http://vps23248.publiccloud.com.br:9002/posts/fe2aa6f7-ab82-4d11-a32f-b23eff6154ca.png"]',
        created_at: new Date()
      }
    ], {});
  }
};
