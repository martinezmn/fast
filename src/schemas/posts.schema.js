module.exports = class PostsSchema {
    static async timeline() {
        return {
            tags: ['Post'],
            summary: 'protected',
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
                                    Profile: {
                                        type: 'object',
                                        properties: {
                                            id: { type: 'string' },
                                            name: { type: 'string' }
                                        }
                                    },
                                    Animal: {
                                        type: ['object', 'null'],
                                        properties: {
                                            id: { type: 'string' },
                                            name: { type: 'string' },
                                            picture_url: { type: 'string' }
                                        }
                                    },
                                    Like: {
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
}
