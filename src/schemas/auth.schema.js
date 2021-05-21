module.exports = class AuthSchema {
    static async authenticate() {
        return {
            schema: {
                tags: ['Auth'],
                body: {
                    type: 'object',
                    properties: {
                        email: { type: 'string' },
                        password: { type: 'string' }
                    },
                    required: ['email', 'password']
                },
                response: {
                    200: {
                        type: 'object',
                        properties: {
                            profile: {
                                type: 'object',
                                properties: {
                                    id: { type: 'string' },
                                    name: { type: 'string' },
                                    full_name: { type: 'string' }
                                }
                            },
                            token: { type: 'string' }
                        }
                    }
                }
            }
        }
    }
}
