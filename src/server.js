const fastify = require('fastify')();

fastify.register(require('fastify-swagger'), {
    routePrefix: '/doc',
    swagger: {
        info: {
            title: 'Test swagger',
            version: '0.0.1'
        },
        consumes: ['application/json'],
        produces: ['application/json'],
        tags: [
            { name: 'Auth', description: 'Auth related end-points' },
            { name: 'Breeds', description: 'Breeds related end-points' }
        ]
    },
    exposeRoute: true
});

fastify.register(require('./routes'));

require('dotenv').config();
require('./database');

const port = process.env.API_PORT || 3000;

fastify.listen(port, function (err, address) {
    if (err) {
        console.log(err);
        process.exit(1);
    }
    console.log(`server listening on ${address}`);
});
