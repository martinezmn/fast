const fastify = require('fastify')({
    ajv: {
        customOptions: {
            allErrors: true
        }
    }
});

require('dotenv').config();
require('./database');

fastify.register(require('fastify-swagger'), {
    routePrefix: '/doc',
    swagger: {
        info: {
            title: 'Test swagger and deploy'
        }
    },
    exposeRoute: true
});

fastify.register(require('fastify-jwt'), {
    secret: process.env.API_SALT
});

fastify.decorate("auth", async (request) => await request.jwtVerify());

fastify.register(require('./routes'));

const port = process.env.API_PORT || 3000;

fastify.listen(port, '0.0.0.0', function (err, address) {
    if (err) {
        console.log(err);
        process.exit(1);
    }
    console.log(`server listening on ${address}`);
});
