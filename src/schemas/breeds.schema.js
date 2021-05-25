module.exports = class BreedsSchema {
    static async list() {
        return {
            tags: ['Breed'],
            summary: 'protected',
            response: {
                200: {
                    type: 'object',
                    properties: {
                        breeds: {
                            type: 'array',
                            items: {
                                type: 'object',
                                properties: {
                                    id: { type: 'integer' },
                                    specie: { type: 'string' },
                                    breed: { type: 'string' }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}