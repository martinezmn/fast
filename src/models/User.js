const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcryptjs');

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
}

module.exports = user;
