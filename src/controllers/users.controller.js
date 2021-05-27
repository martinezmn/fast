const User = require('../models/User');
const Profile = require('../models/Profile');
const Token = require('../models/Token');
const mailerHelper = require('../helpers/mailer.helper');

module.exports = class UsersController {
    static async sendCode(request, reply) {
        try {
            const { email } = request.body;

            const token = await Token.new();

            const hasToken = await Token.findByPk(email);
            
            if (hasToken) {
                await Token.destroy({ where: { email } });
            }
            
            await Token.create({ email, hash: token.hash });

            await mailerHelper.sendCodeToEmail(email, token.code);

            return reply.code(200).send();
        } catch (error) {
            return reply.code(500).send({ message: error.message });
        }
    }

    static async register(request, reply) {
        try {
            const { email, password, name, full_name, email_code } = request.body;

            const token = await Token.findByPk(email);

            if (!token || !await Token.verify(email_code, token.hash)) {
                return reply.code(400).send('Código inválido');
            }

            const profile = await Profile.create({ name, full_name });
            const user = await User.create({ profile_id: profile.id, email, password });

            const jwtToken = User.generateJwt(user);
            await Token.destroy({ where: { email } });

            return reply.code(200).send({ profile, token: jwtToken });
        } catch (error) {
            return reply.code(500).send({ message: error.message });
        }
    }
}
