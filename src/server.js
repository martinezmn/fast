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
            title: 'Test swagger'
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

console.log('Loading migrations...');
require('child_process').exec('npx sequelize-cli db:migrate', (err, stdout, stderr) => {
    if (err) {
        console.error(err)
    } else {
        console.log(stdout.trim());
    }
    
    console.log('\nStarting application...');
    fastify.listen(port, '0.0.0.0', function (err, address) {
        if (err) {
            console.log(err);
            process.exit(1);
        }
        console.log(`\nServer listening on ${address}`);
    });
});
