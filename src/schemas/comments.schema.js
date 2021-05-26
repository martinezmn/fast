module.exports = class CommentsSchema {
    static async list() {
        return {
            tags: ['Comments'],
            summary: 'protected',
            params: {
                type: 'object',
                properties: {
                    post_id: { type: 'integer' },
                    last_comment_id: { type: 'integer' }
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
                                    id: { type: 'integer' },
                                    comment: { type: 'string' },
                                    created_at: { type: 'string' },
                                    Profile: {
                                        type: 'object',
                                        properties: {
                                            id: { type: 'integer' },
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
                    post_id: { type: 'integer' }
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