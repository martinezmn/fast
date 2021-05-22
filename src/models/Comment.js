const { Model, DataTypes } = require('sequelize');
const uniqidHelper = require('../helpers/uniqid.helper');

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
            hooks: {
                beforeCreate: (comment, options) => {
                    comment.id = uniqidHelper.generate();
                }
            },
            updatedAt: false,
            createdAt: 'created_at',
            sequelize
        });
    }
}

module.exports = Comment;
