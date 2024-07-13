const passport = require('passport');
const OAuth2Strategy = require('passport-oauth2');
const User = require('../models/userModel');
const { generateToken } = require('./jwtUtils');

passport.use('oauth2', new OAuth2Strategy({
    authorizationURL: 'https://provider.com/oauth2/authorize',
    tokenURL: 'https://provider.com/oauth2/token',
    clientID: process.env.OAUTH_CLIENT_SECRET,
    callbackURL: 'https://yourapp.com/auth/oauth/callback'
}, async (accessToken, refreshToken, profile, done) => {
    try{
        const userEmail = profile.emails[0].value;
        let user = await User.findOne({ where: { email: userEmail } });
        if (!user) {
            user = await User.create({
                email: userEmail,
                password: '',
                role: 'user'
            });
        }
        return done(null, user);
    } catch (error) {
        return done(error, null);
    }
}));

module.exports = {
    initializeOAuth: () => {
        passport.serializeUser((user, done) => {
            done(null, user.id);
        });

        passport.deserializeUser(async (id, done) => {
            try {
                const user = await User.findByPk(id);
                done(null, user);
            } catch (error) {
                done(error, null);
            }
        });
    },

    generateOAuthToken: (user) => {
        return generateToken(user);
    }
};