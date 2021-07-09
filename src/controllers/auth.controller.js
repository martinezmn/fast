const bcrypt = require('bcryptjs');
const User = require('../models/User');
const Profile = require('../models/Profile');
const InstituteAdmin = require('../models/InstituteAdmin');

module.exports = class AuthController {
    static async authenticate(request, reply) {
        try {
            const { email, password } = request.body;

            const user = await User.findOne({ where: { email: email } });

            if (user === null || !await bcrypt.compare(password, user.password)) {
                return reply.code(400).send({ message: 'Email ou senha inválidos' });
            }

            const profile = await Profile.findByPk(user.profile_id);

            const jwtToken = this.jwt.sign({ user_id: user.profile_id, profile_id: profile.id });

            return reply.code(200).send({ profile, token: jwtToken });
        } catch (error) {
            return reply.code(500).send({ message: error.message });
        }
    }

    static async listAccounts(request, reply) {
        try {
            InstituteAdmin.belongsTo(Profile, { foreignKey: 'institute_id' })

            const accounts = await InstituteAdmin.findAll({
                include: [Profile],
                where: {
                    profile_id: request.user.user_id
                }
            });

            const profile = await Profile.findByPk(request.user.user_id);

            accounts.unshift({ profile });

            return reply.code(200).send({ accounts });
        } catch (error) {
            return reply.code(500).send({ message: error.message });
        }
    }

    static async changeAccount(request, reply) {
        try {
            const { profile_id } = request.body;

            if (profile_id == request.user.profile_id) {
                throw new Error('Nothing to change.');
            }

            if (profile_id != request.user.user_id) {
                const admin = await InstituteAdmin.findOne({
                    where: {
                        profile_id: request.user.user_id,
                        institute_id: profile_id
                    }
                });

                if (!admin) {
                    throw new Error('Invalid account.');
                }
            }

            const profile = await Profile.findByPk(profile_id);

            const jwtToken = this.jwt.sign({ user_id: request.user.user_id, profile_id });

            return reply.code(200).send({ profile, token: jwtToken });
        } catch (error) {
            return reply.code(500).send({ message: error.message });
        }
    }
}
