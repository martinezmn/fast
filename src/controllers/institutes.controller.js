const Institute = require('../models/Institute');
const Animal = require('../models/Animal');
const Breed = require('../models/Breed');
const Like = require('../models/Like');
const Post = require('../models/Post');

module.exports = class InstitutesController {
    static async info(request, reply) {
        try {
            const { institute_id } = request.params;

            const institute = await Institute.findById(institute_id);

            return reply.code(200).send({ institute });
        } catch (error) {
            return reply.code(500).send({ message: error.message });
        }
    }
    
    static async posts(request, reply) {
        try {
            const { institute_id } = request.params;

            Post.belongsTo(Animal)
            Post.hasOne(Like)

            const posts = await Post.findAll({
                include: [Animal, Like],
                where: {
                    institute_id
                },
                order: [['id', 'DESC']]
            })

            return reply.code(200).send({ posts });
        } catch (error) {
            return reply.code(500).send({ message: error.message });
        }
    }
    
    static async animals(request, reply) {
        try {
            const { institute_id } = request.params;

            Animal.belongsTo(Breed)

            const animals = await Animal.findAll({
                include: [Breed],
                where: {
                    institute_id
                },
                order: ['name']
            })

            return reply.code(200).send({ animals });
        } catch (error) {
            return reply.code(500).send({ message: error.message });
        }
    }
}
