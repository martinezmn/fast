const { Model, DataTypes } = require('sequelize');
const Profile = require('./Profile');

class institute extends Model {
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
            description: {
                type: DataTypes.STRING
            },
            city: {
                type: DataTypes.STRING
            },
            state: {
                type: DataTypes.STRING,
                validate: {
                    len: [2]
                }
            }
        }, {
            updatedAt: 'updated_at',
            createdAt: 'created_at',
            sequelize
        });
    }

    static async findById(primaryKey) {
        this.belongsTo(Profile, { foreignKey: 'profile_id' })

        return await this.findByPk(primaryKey, {
            include: [Profile]
        });
    }
}

module.exports = institute;
