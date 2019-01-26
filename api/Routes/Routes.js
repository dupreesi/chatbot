'use strict';
const express = require('express');
module.exports = function(app) {
  const getUserController = require('../Controllers/getUsers');
  const apiRoutes = express.Router();
  app.get('/', function(req, res) {
    res.send('We are happy to see you using Chat Bot Webhook');
  });
  // registerUser Route
  app.route('/').post(getUserController.processRequest);
};
