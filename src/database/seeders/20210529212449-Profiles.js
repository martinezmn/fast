'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('profiles', [
      {
        name: 'Admin Teste',
        full_name: 'Admin Teste da Silva Tester',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Cão Terapeuta',
        full_name: 'Instituto Cão Terapeuta',
        profile_picture: 'http://vps23248.publiccloud.com.br:9002/profiles/fc768575-4384-4524-89f8-338e455a7106.png',
        created_at: new Date(),
        updated_at: new Date()
      }
    ], {});
    
    await queryInterface.bulkInsert('users', [
      {
        profile_id: 1,
        email: 'admin@admin.com',
        password: '$2y$10$oZ/xwh/94SYKzir76oV9CuTVw.Qi9CwViQCqYh5/MDPvhvzXQKG/i',
        created_at: new Date(),
        updated_at: new Date()
      }
    ], {});
    
    await queryInterface.bulkInsert('institutes', [
      {
        profile_id: 2,
        email: 'caoterapeuta@instituto.com',
        description: 'Um instituto legal',
        city: 'Campo Grande',
        state: 'MS',
        created_at: new Date(),
        updated_at: new Date()
      }
    ], {});
  }
};
