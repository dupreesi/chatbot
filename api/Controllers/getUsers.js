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
        fulfillmentText: 'Something went wrong',
        source: 'user-info',
        expectUserResponse: false
      });
    }
    if (userExists) {
      return res.json({
        fulfillmentMessages: [
          {
            card: {
              title: 'How was your Day at School?',
              subtitle: `How was your Day at School ${userExists.name}?`,
              imageUri:
                'https://assistant.google.com/static/images/molecule/Molecule-Formation-stop.png',
              buttons: [
                {
                  text: 'good',
                  postback: 'https://assistant.google.com/'
                },
                {
                  text: 'bad',
                  postback: 'https://assistant.google.com/'
                }
              ]
            }
          }
        ],

        fulfillmentText: `Welcome back ${
          userExists.name
        }! How was your day at school today?`,
        source: 'user-info'
      });
    } else {
      return res.json({
        fulfillmentText:
          'Sorry I cannot find you. Please register first and we can get Started!',
        source: 'user-info'
      });
    }
  });
};
