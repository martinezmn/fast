const User = require('../models/User');
const Profile = require('../models/Profile');
const Token = require('../models/Token');
const emailCodeHelper = require('../helpers/email.code.helper');
const mailerHelper = require('../helpers/mailer.helper');

module.exports = class UsersController {
    static async sendCode(request, reply) {
        try {
            const { email } = request.body;

            const emailCode = emailCodeHelper.generate(email);

            await Token.create({ token: emailCode.hash });

            await mailerHelper.sendCodeToEmail(email, emailCode.code);

            return reply.code(200).send({ message: 'OK' });
        } catch (error) {
            return reply.code(500).send({ message: error.message });
        }
    }

    static async register(request, reply) {
        try {
            const { email, password, name, full_name, email_code } = request.body;

            const emailCode = emailCodeHelper.hash(email, email_code);

            const token = await Token.findByPk(emailCode);

            if (!token) {
                throw new Error('Invalid code.');
            }

            await Token.destroy({ where: { token: emailCode } });

            const profile = await Profile.create({ name, full_name });
            const user = await User.create({ profile_id: profile.id, email, password });

            const jwtToken = User.generateJwt(user);

            return reply.code(200).send({ message: 'OK', profile, token: jwtToken });
        } catch (error) {
            return reply.code(500).send({ message: error.message });
        }
    }
}
