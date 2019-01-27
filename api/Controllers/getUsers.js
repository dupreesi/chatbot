'use strict';
// load model
const User = require('../../db/User');

exports.processRequest = (req, res) => {
  // list actions and call queries
  if (req.body.queryResult.action == 'user-info') {
    getUserInfo(req, res);
  }
};

const getUserInfo = (req, res) => {
  let userToSearch = req.body.queryResult.parameters.name;

  User.findOne({ name: userToSearch }, function(err, userExists) {
    if (err) {
      return res.json({
        //This is the standard format of response for Dialogflow, i.e. Dialogflow will only be able to parse the response if it has these three keys.
        speech: 'Something went wrong',
        displayText: 'Something went wrong',
        source: 'user-info'
      });
    }
    if (userExists) {
      return res.json({
        speech: userExists.name,
        displayText: userExists.name,
        source: 'user-info'
      });
    } else {
      return res.json({
        speech: 'Currently I am not having information about this user',
        displayText: 'Currently I am not having information about this user',
        source: 'user-info'
      });
    }
  });
};
