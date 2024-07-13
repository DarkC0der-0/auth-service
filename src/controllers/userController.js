const UserService = require('../services/userService');

exports.getUser = async (req, res) => {
    const user = await UserService.getUser(req.user.id);
    res.json(user);
};