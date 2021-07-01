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
                                    id: { type: 'integer' },
                                    description: { type: 'string' },
                                    content: { type: 'array' },
                                    has_animals: { type: 'boolean' },
                                    likes_count: { type: 'integer' },
                                    comments_count: { type: 'integer' },
                                    created_at: { type: 'string' },
                                    profile: {
                                        type: 'object',
                                        properties: {
                                            id: { type: 'integer' },
                                            name: { type: 'string' },
                                            profile_picture: { type: ['string', 'null'] }
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
}
