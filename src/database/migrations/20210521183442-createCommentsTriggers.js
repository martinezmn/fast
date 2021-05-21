'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.query('CREATE OR REPLACE FUNCTION comment_post() RETURNS TRIGGER AS $$ BEGIN UPDATE posts SET comments_count = comments_count + 1 WHERE id = NEW.post_id; RETURN NEW; END; $$ LANGUAGE plpgsql;');
    await queryInterface.sequelize.query('CREATE OR REPLACE FUNCTION decomment_post() RETURNS TRIGGER AS $$ BEGIN UPDATE posts SET comments_count = comments_count - 1 WHERE id = OLD.post_id; RETURN OLD; END; $$ LANGUAGE plpgsql;');
    
    await queryInterface.sequelize.query('CREATE TRIGGER update_comment_count AFTER INSERT ON comments FOR EACH ROW EXECUTE PROCEDURE comment_post();');
    await queryInterface.sequelize.query('CREATE TRIGGER update_decomment_count AFTER DELETE ON comments FOR EACH ROW EXECUTE PROCEDURE decomment_post();');
    return true;
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.query('DROP TRIGGER IF EXISTS update_comment_count();');
    await queryInterface.sequelize.query('DROP TRIGGER IF EXISTS update_decomment_count();');

    await queryInterface.sequelize.query('DROP FUNCTION IF EXISTS comment_post();');
    await queryInterface.sequelize.query('DROP FUNCTION IF EXISTS decomment_post();');
    return true;
  }
};
