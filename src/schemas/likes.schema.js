module.exports = class LikesSchema {
    static async like() {
        return {
            tags: ['Like'],
            summary: 'protected',
            params: {
                type: 'object',
                properties: {
                    post_id: { type: 'integer' }
                },
                required: ['post_id']
            },
            response: {
                200: {
                    type: 'object'
                }
            }
        }
    }
}
