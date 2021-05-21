const Breed = require('../models/Breed');

module.exports = class BreedsController {
    static async list(request, reply) {
        try {
            const breeds = await Breed.findAll();

            return reply.code(200).send({ breeds });
        } catch (error) {
            return reply.code(500).send({ message: error.message });
        }
    }
}
