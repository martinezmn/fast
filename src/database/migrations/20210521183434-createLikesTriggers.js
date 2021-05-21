'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.query('CREATE OR REPLACE FUNCTION like_post() RETURNS TRIGGER AS $$ BEGIN UPDATE posts SET likes_count = likes_count + 1 WHERE id = NEW.post_id; RETURN NEW; END; $$ LANGUAGE plpgsql;');
    await queryInterface.sequelize.query('CREATE OR REPLACE FUNCTION dislike_post() RETURNS TRIGGER AS $$ BEGIN UPDATE posts SET likes_count = likes_count - 1 WHERE id = OLD.post_id; RETURN OLD; END; $$ LANGUAGE plpgsql;');

    await queryInterface.sequelize.query('CREATE TRIGGER update_like_count AFTER INSERT ON likes FOR EACH ROW EXECUTE PROCEDURE like_post();');
    await queryInterface.sequelize.query('CREATE TRIGGER update_dislike_count AFTER DELETE ON likes FOR EACH ROW EXECUTE PROCEDURE dislike_post();');
    return true;
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.query('DROP TRIGGER IF EXISTS update_like_count();');
    await queryInterface.sequelize.query('DROP TRIGGER IF EXISTS update_dislike_count();');

    await queryInterface.sequelize.query('DROP FUNCTION IF EXISTS like_post();');
    await queryInterface.sequelize.query('DROP FUNCTION IF EXISTS dislike_post();');
    return true;
  }
};
