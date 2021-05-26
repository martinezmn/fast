const { Model, DataTypes } = require('sequelize');

class animal extends Model {
    static init(sequelize) {
        super.init({
            institute_id: {
                type: DataTypes.BIGINT,
                references: { model: 'profiles', key: 'id' }
            },
            name: {
                type: DataTypes.STRING,
                validate: {
                    is: /^[-\w ]+$/,
                    min: 4,
                    max: 40
                }
            },
            birthdate: {
                type: DataTypes.DATEONLY
            },
            profile_picture: {
                type: DataTypes.STRING,
                validate: {
                    max: 250
                }
            },
            breed_id: {
                type: DataTypes.STRING,
                references: { model: 'breeds', key: 'id' }
            },
            posts_count: {
                type: DataTypes.INTEGER
            },
        }, {
            updatedAt: 'updated_at',
            createdAt: 'created_at',
            sequelize
        });
    }
}

module.exports = animal;
