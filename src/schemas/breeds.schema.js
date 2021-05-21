module.exports = class BreedsSchema {
    static async list() {
        return {
            schema: {
                summary: 'protected',
                tags: ['Breeds'],
                response: {
                    200: {
                        type: 'object',
                        properties: {
                            breeds: {
                                type: 'array',
                                items: {
                                    type: 'object',
                                    properties: {
                                        id: { type: 'string' },
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
}