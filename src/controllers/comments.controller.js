const { Op } = require('sequelize');
const Comment = require('../models/Comment');
const Profile = require('../models/Profile');

module.exports = class CommentsController {
    static async list(request, reply) {
        try {
            const { post_id, last_comment_id } = request.params;

            Profile.hasMany(Comment, { foreignKey: 'profile_id' })
            Comment.belongsTo(Profile, { foreignKey: 'profile_id' })

            let where = {
                post_id
            };

            if (last_comment_id) {
                where.id = { [Op.lt]: last_comment_id };
            }

            const comments = await Comment.findAll({
                include: [Profile],
                where,
                order: [
                    ['id', 'DESC']
                ],
                limit: 10
            });

            return reply.code(200).send({ comments });
        } catch (error) {
            return reply.code(500).send({ message: error.message });
        }
    }

    static async comment(request, reply) {
        try {
            const { post_id } = request.params;
            const { content } = request.body;

            await Comment.create({
                profile_id: request.user.profile_id,
                comment: content,
                post_id
            });

            return reply.code(200).send();
        } catch (error) {
            return reply.code(500).send({ message: error.message });
        }
    }

    static async delete(request, reply) {
        try {
            const { comment_id } = request.params;

            await Comment.destroy({
                where: {
                    id: comment_id,
                    profile_id: request.user.profile_id
                }
            });

            return reply.code(200).send();
        } catch (error) {
            return reply.code(500).send({ message: error.message });
        }
    }
}
