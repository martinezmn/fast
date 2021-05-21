const { Model, DataTypes } = require('sequelize');
const uniqidHelper = require('../helpers/uniqid.helper');

class Profile extends Model {
    static init(sequelize) {
        super.init({
            name: {
                type: DataTypes.STRING,
                validate: {
                    is: /^[-\w ]+$/,
                    min: 4,
                    max: 20
                }
            },
            full_name: {
                type: DataTypes.STRING,
                validate: {
                    is: /^[-\w ]+$/,
                    min: 4,
                    max: 40
                }
            },
        }, {
            hooks: {
                beforeCreate: (profile, options) => {
                    profile.id = uniqidHelper.generate();
                }
            },
            updatedAt: 'updated_at',
            createdAt: 'created_at',
            sequelize
        });
    }
}

module.exports = Profile;
