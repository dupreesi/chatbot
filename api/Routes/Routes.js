'use strict';
const express = require('express');
const router = express.Router();
const getUserController = require('../Controllers/getUsers');

router.get('/', function(req, res) {
  res.send('Welcome');
});

// registerUser Route
router.route('/').post(getUserController.processRequest);

module.exports = router;
