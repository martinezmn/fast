'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.query("INSERT INTO profiles VALUES (1, 'Admin Teste', 'Admin Teste da Silva Tester', null, NOW(), NOW())");
    await queryInterface.sequelize.query("INSERT INTO users VALUES (1, 'admin@admin.com', '$2y$10$oZ/xwh/94SYKzir76oV9CuTVw.Qi9CwViQCqYh5/MDPvhvzXQKG/i', NOW(), NOW())");

    await queryInterface.sequelize.query("INSERT INTO profiles VALUES (2, 'Cão Terapeuta', 'Instituto Cão Terapeuta', 'https://caoterapeuta.org.br/wp-content/uploads/2020/11/lucca-menor-1.png', NOW(), NOW())");
    await queryInterface.sequelize.query("INSERT INTO institutes VALUES (2, 'caoterapeuta@teste.com', 'Um instituto legal', 'Campo Grande', 'MS', NOW(), NOW())");

    await queryInterface.sequelize.query("INSERT INTO institutes_admins VALUES (1, 2, NOW())");

    await queryInterface.sequelize.query("INSERT INTO breeds VALUES ('DOG_JAPANESE_SPITZ', 'Cachorro', 'Spitz japonês')");
    await queryInterface.sequelize.query("INSERT INTO breeds VALUES ('DOG_GOLDEN_RETRIEVER', 'Cachorro', 'Golden retriever')");
    await queryInterface.sequelize.query("INSERT INTO breeds VALUES ('DOG_UNDEFINED', 'Cachorro', 'Vira-lata')");

    await queryInterface.sequelize.query("INSERT INTO animals VALUES (1, 2, 'Angel', '2015-04-07', 'https://caoterapeuta.org.br/wp-content/uploads/2020/11/angel-menor-1.png', 'DOG_JAPANESE_SPITZ', 0, NOW(), NOW())");
    await queryInterface.sequelize.query("INSERT INTO animals VALUES (2, 2, 'Doris', '2018-11-03', 'https://caoterapeuta.org.br/wp-content/uploads/2020/11/doris-menor-1.png', 'DOG_GOLDEN_RETRIEVER', 0, NOW(), NOW())");
    await queryInterface.sequelize.query("INSERT INTO animals VALUES (3, 2, 'Joca', '2016-07-22', 'https://caoterapeuta.org.br/wp-content/uploads/2020/11/joca-menor.png', 'DOG_UNDEFINED', 0, NOW(), NOW())");
    await queryInterface.sequelize.query("INSERT INTO animals VALUES (4, 2, 'Lucca', '2020-01-18', 'https://caoterapeuta.org.br/wp-content/uploads/2020/11/lucca-menor-1.png', 'DOG_GOLDEN_RETRIEVER', 0, NOW(), NOW())");
    await queryInterface.sequelize.query("INSERT INTO animals VALUES (5, 2, 'Maria', '2013-02-15', 'https://caoterapeuta.org.br/wp-content/uploads/2020/11/maria-menor-1.png', 'DOG_UNDEFINED', 0, NOW(), NOW())");

    await queryInterface.sequelize.query("INSERT INTO posts VALUES (1, 2, 1, 'description', '[\"https://www.awebic.com/wp-content/uploads/2015/10/awebic-fotos-cachorros-felizes-99.jpg\"]', 0, 0, NOW())");
    await queryInterface.sequelize.query("INSERT INTO posts VALUES (2, 2, null, 'description', '[\"https://www.awebic.com/wp-content/uploads/2015/10/awebic-fotos-cachorros-felizes-97.jpg\"]', 0, 0, NOW())");
    await queryInterface.sequelize.query("INSERT INTO posts VALUES (3, 2, 3, 'description', '[\"https://www.awebic.com/wp-content/uploads/2015/10/awebic-fotos-cachorros-felizes-95.jpg\"]', 0, 0, NOW())");
    await queryInterface.sequelize.query("INSERT INTO posts VALUES (4, 2, null, 'description', '[\"https://www.awebic.com/wp-content/uploads/2015/10/awebic-fotos-cachorros-felizes-93.jpg\",\"https://www.awebic.com/wp-content/uploads/2015/10/awebic-fotos-cachorros-felizes-99.jpg\"]', 0, 0, NOW())");
    await queryInterface.sequelize.query("INSERT INTO posts VALUES (5, 2, 5, 'description', '[\"https://www.awebic.com/wp-content/uploads/2015/10/awebic-fotos-cachorros-felizes-91.jpg\"]', 0, 0, NOW())");
    await queryInterface.sequelize.query("INSERT INTO posts VALUES (6, 2, 5, 'description', '[\"https://www.awebic.com/wp-content/uploads/2015/10/awebic-fotos-cachorros-felizes-88.jpg\"]', 0, 0, NOW())");

    await queryInterface.sequelize.query("INSERT INTO subscribers VALUES (1, 2, NOW(), NOW())");

    await queryInterface.sequelize.query("INSERT INTO follows VALUES (1, 2, NOW())");

    await queryInterface.sequelize.query("INSERT INTO likes VALUES (1, 6, NOW())");

    await queryInterface.sequelize.query("INSERT INTO comments VALUES (1, 1, 6, 'Foto bonita, gostei', NOW())");
    await queryInterface.sequelize.query("INSERT INTO comments VALUES (2, 1, 6, 'Gostei e curti', NOW())");
    return true;
  }
};
