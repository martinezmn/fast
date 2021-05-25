const { Model, DataTypes } = require('sequelize');
const uniqidHelper = require('../helpers/uniqid.helper');

class comment extends Model {
    static init(sequelize) {
        super.init({
            profile_id: {
                type: DataTypes.BIGINT,
                references: { model: 'profiles', key: 'id' }
            },
            post_id: {
                type: DataTypes.BIGINT,
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

module.exports = comment;
