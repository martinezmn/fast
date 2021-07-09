const Post = require('../models/Post');
const Profile = require('../models/Profile');
const Like = require('../models/Like');
const Animal = require('../models/Animal');

module.exports = class PostsController {
    static async timeline(request, reply) {
        try {
            Post.belongsTo(Profile, { foreignKey: 'institute_id' });
            Post.hasOne(Like);

            const posts = await Post.findAll({
                include: [Profile, Like],
                order: [['id', 'DESC']]
            });

            return reply.code(200).send({ posts });
        } catch (error) {
            return reply.code(500).send({ message: error.message });
        }
    }

    static async animals(request, reply) {
        try {
            const { post_id } = request.params;

            const animals = await Animal.findAllByPostId(post_id);

            return reply.code(200).send({ animals });
        } catch (error) {
            return reply.code(500).send({ message: error.message });
        }
    }
}
