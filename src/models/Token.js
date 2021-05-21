const { Model, DataTypes } = require('sequelize');

class Token extends Model {
    static init(sequelize) {
        super.init({
            token: {
                type: DataTypes.STRING,
                primaryKey: true
            }
        }, {
            updatedAt: false,
            createdAt: 'created_at',
            sequelize
        });
    }
}

module.exports = Token;
