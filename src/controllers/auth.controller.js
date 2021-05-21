const User = require('../models/User');
const Profile = require('../models/Profile');
const bcrypt = require('bcryptjs');

module.exports = class AuthController {
    static async authenticate(request, reply) {
        try {
            const { email, password } = request.body;

            const user = await User.findOne({ where: { email: email } });

            if (user === null || !await bcrypt.compare(password, user.password)) {
                throw new Error('Invalid email or password.');
            }

            const profile = await Profile.findByPk(user.profile_id);

            const jwtToken = User.generateJwt(user);

            return reply.code(200).send({ profile, token: jwtToken });
        } catch (error) {
            return reply.code(500).send({ message: error.message });
        }
    }
}
