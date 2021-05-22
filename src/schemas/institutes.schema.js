module.exports = class InstitutesSchema {
    static async info() {
        return {
            tags: ['Institutes'],
            params: {
                type: 'object',
                properties: {
                    institute_id: { type: 'string' }
                },
                required: ['institute_id']
            },
            response: {
                200: {
                    type: 'object',
                    properties: {
                        institute: {
                            type: 'object',
                            properties: {
                                description: { type: 'string' },
                                city: { type: 'string' },
                                state: { type: 'string' },
                                profile: {
                                    type: 'object',
                                    properties: {
                                        id: { type: 'string' },
                                        name: { type: 'string' },
                                        full_name: { type: 'string' },
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

    static async posts() {
        return {
            tags: ['Institutes'],
            params: {
                type: 'object',
                properties: {
                    institute_id: { type: 'string' }
                },
                required: ['institute_id']
            },
            response: {
                200: {
                    type: 'object',
                    properties: {
                        posts: {
                            type: 'array',
                            items: {
                                type: 'object',
                                properties: {
                                    id: { type: 'string' },
                                    description: { type: 'string' },
                                    content: { type: 'array' },
                                    likes_count: { type: 'integer' },
                                    comments_count: { type: 'integer' },
                                    created_at: { type: 'string' },
                                    animal: {
                                        type: ['object', 'null'],
                                        properties: {
                                            id: { type: 'string' },
                                            name: { type: 'string' },
                                            profile_picture: { type: 'string' }
                                        }
                                    },
                                    like: {
                                        type: ['object', 'null'],
                                        properties: {
                                            created_at: { type: 'string' }
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

    static async animals() {
        return {
            tags: ['Institutes'],
            params: {
                type: 'object',
                properties: {
                    institute_id: { type: 'string' }
                },
                required: ['institute_id']
            },
            response: {
                200: {
                    type: 'object',
                    properties: {
                        animals: {
                            type: 'array',
                            items: {
                                type: 'object',
                                properties: {
                                    id: { type: 'string' },
                                    name: { type: 'string' },
                                    profile_picture: { type: 'string' },
                                    posts_count: { type: 'integer' },
                                    breed: {
                                        type: ['object', 'null'],
                                        properties: {
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
}






