const AuthController = require("./controllers/auth.controller");
const BreedsController = require("./controllers/breeds.controller");
const AuthSchema = require("./schemas/auth.schema");
const BreedsSchema = require("./schemas/breeds.schema");
const UsersSchema = require("./schemas/users.schema");
const UsersController = require("./controllers/users.controller");
const PostsController = require("./controllers/posts.controller");
const PostsSchema = require("./schemas/posts.schema");
const LikesController = require("./controllers/likes.controller");
const LikesSchema = require("./schemas/likes.schema");
const CommentsController = require("./controllers/comments.controller");
const CommentsSchema = require("./schemas/comments.schema");
const InstitutesController = require("./controllers/institutes.controller");
const InstitutesSchema = require("./schemas/institutes.schema");

async function routes(fastify, options) {
    fastify.get('/apii', (request, reply) => {
        reply.send({ node: process.versions.node, });
    });
    
    fastify.post('/auth/authenticate', { schema: await AuthSchema.authenticate() }, AuthController.authenticate);
    fastify.get('/auth/list-accounts', { schema: await AuthSchema.listAccounts(), preValidation: [fastify.auth] }, AuthController.listAccounts);
    fastify.post('/auth/change-account', { schema: await AuthSchema.changeAccount(), preValidation: [fastify.auth] }, AuthController.changeAccount);

    fastify.post('/users/send-code', { schema: await UsersSchema.sendCode() }, UsersController.sendCode);
    fastify.post('/users/register', { schema: await UsersSchema.register() }, UsersController.register);

    fastify.get('/breeds/list', { schema: await BreedsSchema.list(), preValidation: [fastify.auth] }, BreedsController.list);

    fastify.get('/posts/timeline', { schema: await PostsSchema.timeline(), preValidation: [fastify.auth] }, PostsController.timeline);
    fastify.get('/posts/animals/:post_id', { schema: await PostsSchema.animals(), preValidation: [fastify.auth] }, PostsController.animals);

    fastify.post('/likes/like/:post_id', { schema: await LikesSchema.like(), preValidation: [fastify.auth] }, LikesController.like);
    fastify.post('/likes/dislike/:post_id', { schema: await LikesSchema.like(), preValidation: [fastify.auth] }, LikesController.dislike);

    fastify.get('/comments/list/:post_id', { schema: await CommentsSchema.list(), preValidation: [fastify.auth] }, CommentsController.list);
    fastify.get('/comments/list/:post_id/:last_comment_id', { schema: await CommentsSchema.list(), preValidation: [fastify.auth] }, CommentsController.list);
    fastify.post('/comments/comment/:post_id', { schema: await CommentsSchema.comment(), preValidation: [fastify.auth] }, CommentsController.comment);
    fastify.delete('/comments/delete/:comment_id', { schema: await CommentsSchema.delete(), preValidation: [fastify.auth] }, CommentsController.delete);

    fastify.get('/institutes/info/:institute_id', { schema: await InstitutesSchema.info(), preValidation: [fastify.auth] }, InstitutesController.info);
    fastify.get('/institutes/posts/:institute_id', { schema: await InstitutesSchema.posts(), preValidation: [fastify.auth] }, InstitutesController.posts);
    fastify.get('/institutes/animals/:institute_id', { schema: await InstitutesSchema.animals(), preValidation: [fastify.auth] }, InstitutesController.animals);
}

module.exports = routes;
