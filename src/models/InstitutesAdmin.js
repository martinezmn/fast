const { Model, DataTypes } = require('sequelize');

class InstitutesAdmin extends Model {
    static init(sequelize) {
        super.init({
            profile_id: {
                type: DataTypes.STRING,
                primaryKey: true,
                references: { model: 'profiles', key: 'id' }
            },
            institute_id: {
                type: DataTypes.STRING,
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

module.exports = InstitutesAdmin;
