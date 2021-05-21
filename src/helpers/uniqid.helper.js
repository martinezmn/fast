const uniqid = require('uniqid');
const crypto = require('crypto');

module.exports = class uniqidHelper {
    static generate() {
        let id = uniqid.time() + crypto.randomBytes(64).toString('base64').toLowerCase();
        return id.replace(/[^a-z0-9]/g, '').substring(0, 16);
    }
}
