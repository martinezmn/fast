const Like = require('../models/Like');

module.exports = class LikesController {
    static async like(request, reply) {
        try {
            const { post_id } = request.params;

            await Like.create({ profile_id: request.user.profile_id, post_id }, { ignoreDuplicates: true });

            return reply.code(200).send();
        } catch (error) {
            return reply.code(500).send({ message: error.message });
        }
    }

    static async dislike(request, reply) {
        try {
            const { post_id } = request.params;

            await Like.destroy({ where: { profile_id: request.user.profile_id, post_id } });

            return reply.code(200).send();
        } catch (error) {
            return reply.code(500).send({ message: error.message });
        }
    }
}
