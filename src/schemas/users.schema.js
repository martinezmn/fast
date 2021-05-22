module.exports = class BreedsSchema {
    static async sendCode() {
        return {
            tags: ['User'],
            body: {
                type: 'object',
                properties: {
                    email: { type: 'string' }
                },
                required: ['email']
            },
            response: {
                200: {
                    type: 'object'
                }
            }
        }
    }

    static async register() {
        return {
            tags: ['User'],
            body: {
                type: 'object',
                properties: {
                    email: { type: 'string' },
                    password: { type: 'string' },
                    name: { type: 'string' },
                    full_name: { type: 'string' },
                    email_code: { type: 'integer', minimum: 1000, maximum: 9999 }
                },
                required: ['email', 'password', 'name', 'full_name', 'email_code']
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