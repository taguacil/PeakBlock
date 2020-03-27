
const express = require('express');
const passport = require('passport');
const cors = require('cors');
const error = require('../middlewares/error');
const authToken = require('../middlewares/auth');
const startupMessage = require('../routes/startupMessage');

module.exports = function initRoutes(app) {
    app.use(cors());
    app.use(express.json());
    app.use(passport.initialize());
    app.use(authToken);
    app.use('/', startupMessage);
    app.use(error);
};
