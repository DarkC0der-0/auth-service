const express = require('express');
const passport = require('passport');
const AuthController = require('../controllers/authConroller');

const router = express.Router();

router.post('/login', AuthController.login);
router.post('/signup', AuthController.signup);
router.get('/oauth/callback', passport.authenticate('oauth2'), AuthController.oauthLogin);

module.exports = router;