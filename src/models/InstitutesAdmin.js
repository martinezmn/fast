const { Model, DataTypes } = require('sequelize');

class institutesAdmin extends Model {
    static init(sequelize) {
        super.init({
            profile_id: {
                type: DataTypes.BIGINT,
                primaryKey: true,
                references: { model: 'profiles', key: 'id' }
            },
            institute_id: {
                type: DataTypes.BIGINT,
                primaryKey: true,
                references: { model: 'profiles', key: 'id' }
            }
        }, {
            updatedAt: false,
            createdAt: 'created_at',
            sequelize
        });
    }
}

module.exports = institutesAdmin;
