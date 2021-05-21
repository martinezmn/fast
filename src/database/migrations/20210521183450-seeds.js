'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.query("INSERT INTO profiles VALUES ('kodjflbtckulezx8', 'Admin Teste', 'Admin Teste da Silva Tester', NOW(), NOW())");
    await queryInterface.sequelize.query("INSERT INTO users VALUES ('kodjflbtckulezx8', 'admin@admin.com', '$2y$10$oZ/xwh/94SYKzir76oV9CuTVw.Qi9CwViQCqYh5/MDPvhvzXQKG/i', NOW(), NOW())");

    await queryInterface.sequelize.query("INSERT INTO profiles VALUES ('kodjomkfgfaa17eb', 'Cão Terapeuta', 'Instituto Cão Terapeuta', NOW(), NOW())");
    await queryInterface.sequelize.query("INSERT INTO institutes VALUES ('kodjomkfgfaa17eb', 'caoterapeuta@teste.com', NOW(), NOW())");

    await queryInterface.sequelize.query("INSERT INTO institutes_admins VALUES ('kodjflbtckulezx8', 'kodjomkfgfaa17eb', NOW())");

    await queryInterface.sequelize.query("INSERT INTO breeds VALUES ('DOG_JAPANESE_SPITZ', 'Cachorro', 'Spitz japonês')");
    await queryInterface.sequelize.query("INSERT INTO breeds VALUES ('DOG_GOLDEN_RETRIEVER', 'Cachorro', 'Golden retriever')");
    await queryInterface.sequelize.query("INSERT INTO breeds VALUES ('DOG_UNDEFINED', 'Cachorro', 'Vira-lata')");

    await queryInterface.sequelize.query("INSERT INTO animals VALUES ('kodjryg4wyzplaxv', 'kodjomkfgfaa17eb', 'Angel', '2015-04-07', 'https://caoterapeuta.org.br/wp-content/uploads/2020/11/angel-menor-1.png', 'DOG_JAPANESE_SPITZ', 0, NOW(), NOW())");
    await queryInterface.sequelize.query("INSERT INTO animals VALUES ('kodjs2vd0bwes6rr', 'kodjomkfgfaa17eb', 'Doris', '2018-11-03', 'https://caoterapeuta.org.br/wp-content/uploads/2020/11/doris-menor-1.png', 'DOG_GOLDEN_RETRIEVER', 0, NOW(), NOW())");
    await queryInterface.sequelize.query("INSERT INTO animals VALUES ('kodjs62obyippxdw', 'kodjomkfgfaa17eb', 'Joca', '2016-07-22', 'https://caoterapeuta.org.br/wp-content/uploads/2020/11/joca-menor.png', 'DOG_UNDEFINED', 0, NOW(), NOW())");
    await queryInterface.sequelize.query("INSERT INTO animals VALUES ('kodjs9aixkxxundo', 'kodjomkfgfaa17eb', 'Lucca', '2020-01-18', 'https://caoterapeuta.org.br/wp-content/uploads/2020/11/lucca-menor-1.png', 'DOG_GOLDEN_RETRIEVER', 0, NOW(), NOW())");
    await queryInterface.sequelize.query("INSERT INTO animals VALUES ('kodjscftgyoyxzyi', 'kodjomkfgfaa17eb', 'Maria', '2013-02-15', 'https://caoterapeuta.org.br/wp-content/uploads/2020/11/maria-menor-1.png', 'DOG_UNDEFINED', 0, NOW(), NOW())");

    await queryInterface.sequelize.query("INSERT INTO posts VALUES ('kodju6nhrekagicj', 'kodjomkfgfaa17eb', 'kodjryg4wyzplaxv', 'description', 'https://www.awebic.com/wp-content/uploads/2015/10/awebic-fotos-cachorros-felizes-99.jpg', 0, 0, NOW())");
    await queryInterface.sequelize.query("INSERT INTO posts VALUES ('kodju9xziqc3upgj', 'kodjomkfgfaa17eb', null, 'description', 'https://www.awebic.com/wp-content/uploads/2015/10/awebic-fotos-cachorros-felizes-97.jpg', 0, 0, NOW())");
    await queryInterface.sequelize.query("INSERT INTO posts VALUES ('kodjucvcted2eg6z', 'kodjomkfgfaa17eb', 'kodjs62obyippxdw', 'description', 'https://www.awebic.com/wp-content/uploads/2015/10/awebic-fotos-cachorros-felizes-95.jpg', 0, 0, NOW())");
    await queryInterface.sequelize.query("INSERT INTO posts VALUES ('kodjufrr0pzpiot5', 'kodjomkfgfaa17eb', null, 'description', 'https://www.awebic.com/wp-content/uploads/2015/10/awebic-fotos-cachorros-felizes-93.jpg', 0, 0, NOW())");
    await queryInterface.sequelize.query("INSERT INTO posts VALUES ('kodjuj0n0f0k8w31', 'kodjomkfgfaa17eb', 'kodjscftgyoyxzyi', 'description', 'https://www.awebic.com/wp-content/uploads/2015/10/awebic-fotos-cachorros-felizes-91.jpg', 0, 0, NOW())");
    await queryInterface.sequelize.query("INSERT INTO posts VALUES ('kodjum8wii3ql1n6', 'kodjomkfgfaa17eb', 'kodjscftgyoyxzyi', 'description', 'https://www.awebic.com/wp-content/uploads/2015/10/awebic-fotos-cachorros-felizes-88.jpg', 0, 0, NOW())");

    await queryInterface.sequelize.query("INSERT INTO subscribers VALUES ('kodjflbtckulezx8', 'kodjomkfgfaa17eb', NOW(), NOW())");

    await queryInterface.sequelize.query("INSERT INTO follows VALUES ('kodjflbtckulezx8', 'kodjomkfgfaa17eb', NOW())");

    await queryInterface.sequelize.query("INSERT INTO likes VALUES ('kodjflbtckulezx8', 'kodjum8wii3ql1n6', NOW())");

    await queryInterface.sequelize.query("INSERT INTO comments VALUES ('kodk197unzlqr1ii', 'kodjflbtckulezx8', 'kodjum8wii3ql1n6', 'Foto bonita, gostei', NOW())");
    await queryInterface.sequelize.query("INSERT INTO comments VALUES ('kodk1df682w5bnhl', 'kodjflbtckulezx8', 'kodjum8wii3ql1n6', 'Gostei e curti', NOW())");
    return true;
  }
};
