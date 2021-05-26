const { Model, DataTypes } = require('sequelize');

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
            updatedAt: false,
            createdAt: 'created_at',
            sequelize
        });
    }
}

module.exports = comment;
