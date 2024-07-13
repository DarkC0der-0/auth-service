const express = require('express');
const passport = require('passport');
const bodyParser = require('body-parser');
require('./config/passportConfig');

const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();

app.use(bodyParser.json());
app.use(passport.initialize());

app.use('/auth', authRoutes);
app.use('/user', userRoutes);

module.exports = app;
