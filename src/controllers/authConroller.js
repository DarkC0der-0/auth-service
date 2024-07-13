const AuthService = require('../services/authService');

exports.login = async (req, res) => {
    const { email, password } = req.body;
    const token = await AuthService.login(email, password);
    res.json({ token });
};

exports.signup = async (req, res) => {
    const { email, password, role } = req.body;
    const user = await AuthService.signup(email, password, role);
    res.json(user);
};

exports.oauthLogin = async (req, res) => {
    const token = await AuthService.oauthLogin(req.user);
    res.json({ token });
};

