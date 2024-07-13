const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config/config');

exports.generateToken = (user) => {
    return jwt.sign({ id: user.id, role: user.role }, JWT_SECRET);
};

exports.verifyToken = (token) => {
    return jwt.verify(token, JWT_SECRET);
};
