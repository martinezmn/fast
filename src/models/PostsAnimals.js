const { Model, DataTypes } = require('sequelize');

class postsAnimals extends Model {
    static init(sequelize) {
        super.init({
            post_id: {
                type: DataTypes.BIGINT,
                primaryKey: true,
                references: { model: 'posts', key: 'id' }
            },
            animal_id: {
                type: DataTypes.BIGINT,
                primaryKey: true,
                references: { model: 'animals', key: 'id' }
            }
        }, {
            updatedAt: false,
            createdAt: false,
            sequelize
        });
    }
}

module.exports = postsAnimals;
