const jwt = require('jsonwebtoken');

module.exports = (request, reply, next) => {
    try {
        const authHeader = request.headers.authorization;

        if (!authHeader) {
            throw new Error('No token provided');
        }

        const parts = authHeader.split(' ');

        if (!parts.length === 2) {
            throw new Error('Token error');
        }

        const [schema, token] = parts;

        if (!/^Bearer$/i.test(schema)) {
            throw new Error('Malformatted token');
        }

        jwt.verify(token, process.env.API_SALT, (err, decoded) => {
            if (err) {
                throw new Error('Invalid token');
            }

            request.profile = decoded.profile;
            request.user = decoded.user;

            return next();
        });
    } catch (error) {
        return reply.status(401).send({ message: error.message });
    }
};
