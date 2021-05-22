const mailer = require('nodemailer');
const path = require('path');
const handlebars = require('handlebars');
const fs = require('fs');

require('dotenv').config();

const sender = mailer.createTransport({
    host: process.env.SMTP_HOST,
    service: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: process.env.SMTP_SECURE == 'true',
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
    }
});

module.exports = class mailerHelper {
    static async send(config) {
        const filePath = path.join(__dirname, '../templates/', config.template + '.html');
        const template = handlebars.compile(fs.readFileSync(filePath, 'utf-8').toString());

        let emailSend = {
            from: process.env.SMTP_USER,
            to: config.recipient,
            subject: config.subject,
            html: template(config.replacements)
        };

        return await sender.sendMail(emailSend);
    }

    static async sendCodeToEmail(recipient, code) {
        return await mailerHelper.send({
            recipient,
            subject: 'Confirmação de email',
            template: 'email.code',
            replacements: { code }
        });
    }
}
