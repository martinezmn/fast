const { Model, DataTypes } = require('sequelize');

class post extends Model {
    static init(sequelize) {
        super.init({
            institute_id: {
                type: DataTypes.BIGINT,
                references: { model: 'profiles', key: 'id' }
            },
            description: {
                type: DataTypes.STRING,
                validate: {
                    max: 250
                }
            },
            content: {
                type: DataTypes.JSON
            },
            has_animals: {
                type: DataTypes.BOOLEAN,
            },
            likes_count: {
                type: DataTypes.INTEGER
            },
            comments_count: {
                type: DataTypes.INTEGER
            },
        }, {
            updatedAt: false,
            createdAt: 'created_at',
            sequelize
        });
    }
}

module.exports = post;
