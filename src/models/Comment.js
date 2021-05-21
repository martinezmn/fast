const { Model, DataTypes, Op } = require('sequelize');
const Profile = require('../models/Profile');

class Comment extends Model {
    static init(sequelize) {
        super.init({
            profile_id: {
                type: DataTypes.STRING,
                references: { model: 'profiles', key: 'id' }
            },
            post_id: {
                type: DataTypes.STRING,
                references: { model: 'posts', key: 'id' }
            },
            comment: {
                type: DataTypes.STRING
            }
        }, {
            updatedAt: false,
            createdAt: 'created_at',
            sequelize
        });

        Comment.list = async function (post_id, last_comment_id) {
            Profile.hasMany(Comment, { foreignKey: 'profile_id' })
            Comment.belongsTo(Profile, { foreignKey: 'profile_id' })

            let where = {
                post_id
            };

            if (last_comment_id) {
                where.id = { [Op.lt]: last_comment_id };
            }

            return await Comment.findAll({
                include: [Profile],
                where,
                order: [
                    ['id', 'DESC']
                ],
                limit: 10
            });
        }
    }
}

module.exports = Comment;
