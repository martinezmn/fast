module.exports = class CommentsSchema {
    static async list() {
        return {
            tags: ['Comments'],
            summary: 'protected',
            params: {
                type: 'object',
                properties: {
                    post_id: { type: 'string' },
                    last_comment_id: { type: 'string' }
                },
                required: ['post_id']
            },
            response: {
                200: {
                    type: 'object',
                    properties: {
                        comments: {
                            type: 'array',
                            items: {
                                type: 'object',
                                properties: {
                                    id: { type: 'string' },
                                    comment: { type: 'string' },
                                    created_at: { type: 'string' },
                                    Profile: {
                                        type: 'object',
                                        properties: {
                                            id: { type: 'string' },
                                            name: { type: 'string' }
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

    static async comment() {
        return {
            tags: ['Comments'],
            summary: 'protected',
            params: {
                type: 'object',
                properties: {
                    post_id: { type: 'string' }
                },
                required: ['post_id']
            },
            body: {
                type: 'object',
                properties: {
                    content: { type: 'string' }
                },
                required: ['content']
            },
            response: {
                200: {
                    type: 'object'
                }
            }
        }
    }

    static async delete() {
        return {
            tags: ['Comments'],
            summary: 'protected',
            params: {
                type: 'object',
                properties: {
                    comment_id: { type: 'string' }
                },
                required: ['comment_id']
            },
            response: {
                200: {
                    type: 'object'
                }
            }
        }
    }
}