const { Model, DataTypes } = require('sequelize');
const uniqidHelper = require('../helpers/uniqid.helper');

class Post extends Model {
    static init(sequelize) {
        super.init({
            profile_id: {
                type: DataTypes.STRING,
                references: { model: 'profiles', key: 'id' }
            },
            animal_id: {
                type: DataTypes.STRING,
                references: { model: 'animals', key: 'id' }
            },
            description: {
                type: DataTypes.STRING,
                validate: {
                    max: 250
                }
            },
            picture_url: {
                type: DataTypes.STRING,
                validate: {
                    max: 250
                }
            },
        }, {
            hooks: {
                beforeCreate: (post, options) => {
                    post.id = uniqidHelper.generate();
                }
            },
            updatedAt: false,
            createdAt: 'created_at',
            sequelize
        });

        Post.timeline = async function (profile_id, last_post_id) {
            let sql = "SELECT posts.id AS post_id, posts.profile_id, profiles.full_name AS institute_name, posts.animal_id, animals.name AS animal_name, animals.picture_url AS animal_picture_url, posts.description, posts.picture_url, posts.created_at, posts.likes_count, posts.comments_count, CASE WHEN likes.profile_id IS NULL THEN false ELSE true END has_liked FROM posts JOIN profiles ON posts.profile_id = profiles.id LEFT JOIN animals ON posts.animal_id = animals.id LEFT JOIN likes ON likes.post_id = posts.id AND likes.profile_id = :profile_id WHERE ";

            if (last_post_id) {
                sql += " posts.id < :last_post_id AND ";
            }

            sql += " (posts.animal_id IN (SELECT animal_id FROM subscribers WHERE subscribers.profile_id = :profile_id) OR (posts.animal_id IS NULL AND posts.profile_id IN (SELECT institute_id FROM follows WHERE profile_id = :profile_id))) ORDER BY posts.id DESC LIMIT 10";

            return await sequelize.query(sql, {
                replacements: { profile_id, last_post_id },
                type: sequelize.QueryTypes.SELECT
            });
        }
    }
}

module.exports = Post;
