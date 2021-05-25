'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.query("INSERT INTO profiles VALUES (1621967049440827676, 'Admin Teste', 'Admin Teste da Silva Tester', null, NOW(), NOW())");
    await queryInterface.sequelize.query("INSERT INTO users VALUES (1621967049440827676, 'admin@admin.com', '$2y$10$oZ/xwh/94SYKzir76oV9CuTVw.Qi9CwViQCqYh5/MDPvhvzXQKG/i', NOW(), NOW())");

    await queryInterface.sequelize.query("INSERT INTO profiles VALUES (1621967041852732249, 'Cão Terapeuta', 'Instituto Cão Terapeuta', 'https://caoterapeuta.org.br/wp-content/uploads/2020/11/lucca-menor-1.png', NOW(), NOW())");
    await queryInterface.sequelize.query("INSERT INTO institutes VALUES (1621967041852732249, 'caoterapeuta@teste.com', 'Um instituto legal', 'Campo Grande', 'MS', NOW(), NOW())");

    await queryInterface.sequelize.query("INSERT INTO institutes_admins VALUES (1621967049440827676, 1621967041852732249, NOW())");

    await queryInterface.sequelize.query("INSERT INTO breeds VALUES ('DOG_JAPANESE_SPITZ', 'Cachorro', 'Spitz japonês')");
    await queryInterface.sequelize.query("INSERT INTO breeds VALUES ('DOG_GOLDEN_RETRIEVER', 'Cachorro', 'Golden retriever')");
    await queryInterface.sequelize.query("INSERT INTO breeds VALUES ('DOG_UNDEFINED', 'Cachorro', 'Vira-lata')");

    await queryInterface.sequelize.query("INSERT INTO animals VALUES (1621967041684498524, 1621967041852732249, 'Angel', '2015-04-07', 'https://caoterapeuta.org.br/wp-content/uploads/2020/11/angel-menor-1.png', 'DOG_JAPANESE_SPITZ', 0, NOW(), NOW())");
    await queryInterface.sequelize.query("INSERT INTO animals VALUES (1621967041794628140, 1621967041852732249, 'Doris', '2018-11-03', 'https://caoterapeuta.org.br/wp-content/uploads/2020/11/doris-menor-1.png', 'DOG_GOLDEN_RETRIEVER', 0, NOW(), NOW())");
    await queryInterface.sequelize.query("INSERT INTO animals VALUES (1621967041180511794, 1621967041852732249, 'Joca', '2016-07-22', 'https://caoterapeuta.org.br/wp-content/uploads/2020/11/joca-menor.png', 'DOG_UNDEFINED', 0, NOW(), NOW())");
    await queryInterface.sequelize.query("INSERT INTO animals VALUES (1621967041934363055, 1621967041852732249, 'Lucca', '2020-01-18', 'https://caoterapeuta.org.br/wp-content/uploads/2020/11/lucca-menor-1.png', 'DOG_GOLDEN_RETRIEVER', 0, NOW(), NOW())");
    await queryInterface.sequelize.query("INSERT INTO animals VALUES (1621967041553622621, 1621967041852732249, 'Maria', '2013-02-15', 'https://caoterapeuta.org.br/wp-content/uploads/2020/11/maria-menor-1.png', 'DOG_UNDEFINED', 0, NOW(), NOW())");

    await queryInterface.sequelize.query("INSERT INTO posts VALUES (1621967041608113033, 1621967041852732249, 1621967041684498524, 'description', '[\"https://www.awebic.com/wp-content/uploads/2015/10/awebic-fotos-cachorros-felizes-99.jpg\"]', 0, 0, NOW())");
    await queryInterface.sequelize.query("INSERT INTO posts VALUES (1621967041228567243, 1621967041852732249, null, 'description', '[\"https://www.awebic.com/wp-content/uploads/2015/10/awebic-fotos-cachorros-felizes-97.jpg\"]', 0, 0, NOW())");
    await queryInterface.sequelize.query("INSERT INTO posts VALUES (1621967041323973085, 1621967041852732249, 1621967041180511794, 'description', '[\"https://www.awebic.com/wp-content/uploads/2015/10/awebic-fotos-cachorros-felizes-95.jpg\"]', 0, 0, NOW())");
    await queryInterface.sequelize.query("INSERT INTO posts VALUES (1621967041312361805, 1621967041852732249, null, 'description', '[\"https://www.awebic.com/wp-content/uploads/2015/10/awebic-fotos-cachorros-felizes-93.jpg\",\"https://www.awebic.com/wp-content/uploads/2015/10/awebic-fotos-cachorros-felizes-99.jpg\"]', 0, 0, NOW())");
    await queryInterface.sequelize.query("INSERT INTO posts VALUES (1621967041511213283, 1621967041852732249, 1621967041553622621, 'description', '[\"https://www.awebic.com/wp-content/uploads/2015/10/awebic-fotos-cachorros-felizes-91.jpg\"]', 0, 0, NOW())");
    await queryInterface.sequelize.query("INSERT INTO posts VALUES (1621967041181199604, 1621967041852732249, 1621967041553622621, 'description', '[\"https://www.awebic.com/wp-content/uploads/2015/10/awebic-fotos-cachorros-felizes-88.jpg\"]', 0, 0, NOW())");

    await queryInterface.sequelize.query("INSERT INTO subscribers VALUES (1621967049440827676, 1621967041852732249, NOW(), NOW())");

    await queryInterface.sequelize.query("INSERT INTO follows VALUES (1621967049440827676, 1621967041852732249, NOW())");

    await queryInterface.sequelize.query("INSERT INTO likes VALUES (1621967049440827676, 1621967041181199604, NOW())");

    await queryInterface.sequelize.query("INSERT INTO comments VALUES (1621967041290472869, 1621967049440827676, 1621967041181199604, 'Foto bonita, gostei', NOW())");
    await queryInterface.sequelize.query("INSERT INTO comments VALUES (1621967041378033517, 1621967049440827676, 1621967041181199604, 'Gostei e curti', NOW())");
    return true;
  }
};
