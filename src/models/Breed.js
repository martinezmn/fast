const { Model, DataTypes } = require('sequelize');

class Breed extends Model {
    static init(sequelize) {
        super.init({
            specie: {
                type: DataTypes.STRING
            },
            breed: {
                type: DataTypes.STRING
            },
        }, {
            updatedAt: false,
            createdAt: false,
            sequelize
        });
    }
}

module.exports = Breed;
