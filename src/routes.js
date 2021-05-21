const protected = require("./auth");
const authController = require("./controllers/auth.controller");
const BreedsController = require("./controllers/breeds.controller");
const usersController = require("./controllers/users.controller");
const authSchema = require("./schemas/auth.schema");
const BreedsSchema = require("./schemas/breeds.schema");

async function routes(fastify, options) {

    fastify.post('/auth/authenticate', await authSchema.authenticate(), authController.authenticate);

    fastify.get('/breeds', await BreedsSchema.list(), protected, BreedsController.list);

    // routes.post('/auth/authenticate', authController.authenticate);

    // routes.post('/users/send-code', usersController.sendCode);
    // routes.post('/users/register', usersController.register);

    // routes.get('/posts/timeline', protected, postsController.timeline);
    // routes.get('/posts/timeline/:last_post_id', protected, postsController.timeline);

    // routes.post('/likes/:post_id/like', protected, likesController.like);
    // routes.post('/likes/:post_id/dislike', protected, likesController.dislike);

    // routes.get('/comments/:post_id', protected, commentsController.list);
    // routes.get('/comments/:post_id/:last_comment_id', protected, commentsController.list);
    // routes.post('/comments/comment', protected, commentsController.comment);
    // routes.delete('/comments/delete/:comment_id', protected, commentsController.delete);
}

module.exports = routes;
