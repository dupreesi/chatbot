'use strict';
const express = require('express');
const router = express.Router();
const getUserController = require('../Controllers/getUsers');
const updateUser = require('../../db/udateUser');

router.get('/', function(req, res) {
  res.send('Welcome');
});
// registerUser Route
router.route('/').post(getUserController.processRequest);

router.get('/update-mood-good', function(req, res) {
  res.send('CLICK');
});

router.post('/update-mood-good', function(req, res) {
  const mood = req.path.split('-')[2].split('/')[0];
  updateUser('Nadia', mood);
});

router.post('/update-mood-bad', (req, res) => {
  const mood = req.path.split('-')[2].split('/')[0];
  updateUser('Nadia', mood);
});

module.exports = router;
