const User = require('../models/userModel');

class UserService {
    static getUser(userId) {
        return User.findByPk(userId);
    }
}

module.exports = UserService;