const formidable = require('formidable');

module.exports = class formidableHelper {
    static async form(req) {
        const form = formidable({ multiples: true });

        const { fields, files } = await new Promise(function (resolve, reject) {
            form.parse(req, (err, fields, files) => {
                if (err) {
                    reject(err);
                    return;
                }
                resolve({ fields, files });
            });
        });
        return { fields, files };
    }
}
