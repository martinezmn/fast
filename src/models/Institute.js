const { Model, DataTypes } = require('sequelize');

class Institute extends Model {
    static init(sequelize) {
        super.init({
            profile_id: {
                type: DataTypes.STRING,
                primaryKey: true
            },
            email: {
                type: DataTypes.STRING,
                validate: {
                    isEmail: true
                }
            }
        }, {
            updatedAt: 'updated_at',
            createdAt: 'created_at',
            sequelize
        });
    }
}

module.exports = Institute;
