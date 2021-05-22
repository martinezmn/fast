module.exports = class AuthSchema {
    static async authenticate() {
        return {
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
                                full_name: { type: 'string' },
                                profile_picture: { type: ['string', 'null'] }
                            }
                        },
                        token: { type: 'string' }
                    }
                }
            }
        }
    }

    static async listAccounts() {
        return {
            tags: ['Auth'],
            summary: 'protected',
            response: {
                200: {
                    type: 'object',
                    properties: {
                        accounts: {
                            type: 'array',
                            items: {
                                type: 'object',
                                properties: {
                                    profile: {
                                        type: 'object',
                                        properties: {
                                            id: { type: 'string' },
                                            name: { type: 'string' },
                                            profile_picture: { type: ['string', 'null'] }
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

    static async changeAccount() {
        return {
            tags: ['Auth'],
            summary: 'protected',
            body: {
                type: 'object',
                properties: {
                    profile_id: { type: 'string' },
                },
                required: ['profile_id']
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
                                full_name: { type: 'string' },
                                profile_picture: { type: ['string', 'null'] }
                            }
                        },
                        token: { type: 'string' }
                    }
                }
            }
        }
    }
}
