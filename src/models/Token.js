const { Model, DataTypes } = require('sequelize');
const crypto = require('crypto');

class Token extends Model {
    static init(sequelize) {
        super.init({
            email: {
                type: DataTypes.STRING,
                primaryKey: true
            },
            hash: {
                type: DataTypes.STRING
            }
        }, {
            updatedAt: false,
            createdAt: 'created_at',
            sequelize
        });
    }

    static async new() {
        const code = Math.floor((Math.random() * (9999 - 1000) + 1000)).toString();
        const hash = crypto.pbkdf2Sync(code, process.env.API_SALT, 1, 64, 'sha512').toString('hex');
        return { code, hash }
    }

    static async verify(code, hash) {
        const codeHash = crypto.pbkdf2Sync((code).toString(), process.env.API_SALT, 1, 64, 'sha512').toString('hex');
        if (codeHash === hash) {
            return true;
        }
        return false;
    }
}

module.exports = Token;
