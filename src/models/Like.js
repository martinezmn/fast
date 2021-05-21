const { Model, DataTypes } = require('sequelize');

class Like extends Model {
    static init(sequelize) {
        super.init({
            profile_id: {
                type: DataTypes.STRING,
                primaryKey: true,
                references: { model: 'profiles', key: 'id' }
            },
            post_id: {
                type: DataTypes.STRING,
                primaryKey: true,
                references: { model: 'posts', key: 'id' }
            }
        }, {
            updatedAt: false,
            createdAt: 'created_at',
            sequelize
        });
    }
}

module.exports = Like;
