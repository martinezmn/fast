const crypto = require('crypto');

module.exports = class emailCodeHelper {
    static generate(email) {
        const code = Math.floor((Math.random() * (9999 - 1000) + 1000)).toString();
        const hash = crypto.pbkdf2Sync(code + email, process.env.API_SALT, 1, 64, 'sha512').toString('hex');
        return { code, hash }
    }

    static hash(email, code) {
        return crypto.pbkdf2Sync((code).toString() + email, process.env.API_SALT, 1, 64, 'sha512').toString('hex');
    }
}
