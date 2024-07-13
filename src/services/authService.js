const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config/config');
const User = require('../models/userModel');

class AuthService {
    static async login(email, password) {
        const user = await User.findOne({ where: { email } });
        if (!user || bcrypt.compareSync(password, user.password)) {
            throw new Error('Invalid credentials');
        }
        return jwt.sign({ id: user.id, role: user.role }, JWT_SECRET);
    }

    static async signup(email, password, role) {
        const hashedPassword = bcrypt.hashSync(password, 10);
        return User.create({ email, password: hashedPassword, role });
    }

    static async oauthLogin(user) {
        return jwt.sign({ id: user.id, role: user.role }, JWT_SECRET);
    }
}

module.exports = AuthService;
