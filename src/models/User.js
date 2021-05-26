const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

class user extends Model {
    static init(sequelize) {
        super.init({
            profile_id: {
                type: DataTypes.BIGINT,
                primaryKey: true
            },
            email: {
                type: DataTypes.STRING,
                validate: {
                    isEmail: true
                }
            },
            password: {
                type: DataTypes.STRING,
                validate: {
                    min: 6
                }
            }
        }, {
            hooks: {
                beforeValidate: async (user, options) => {
                    user.password = await bcrypt.hash(user.password, 10);
                }
            },
            updatedAt: 'updated_at',
            createdAt: 'created_at',
            sequelize
        });
    }

    static generateJwt(user) {
        return jwt.sign({ user: user.profile_id, profile: user.profile_id }, process.env.API_SALT);
    }
}

module.exports = user;
