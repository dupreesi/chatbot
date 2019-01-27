'use strict';
// load model
const User = require('../../db/User');

const updateMood = require('../../db/udateUser');

exports.processRequest = (req, res) => {
  // list actions and call queries
  if (req.body.queryResult.action == 'user-info') {
    getUserInfo(req, res);
  }
  if (req.body.queryResult.action == 'school-day') {
    updateUserInfo(req, res);
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
        // fulfillmentMessages: [
        //   {
        //     card: {
        //       title: `How was your Day at School ${userExists.name}?`,
        //       imageUri:
        //         'https://media0.giphy.com/media/gtmEIOOOHVgHK/giphy.gif',
        //       buttons: [
        //         {
        //           text: 'good',
        //           postback:
        //             'https://chatbotnightingale.herokuapp.com/update-mood-good'
        //         },
        //         {
        //           text: 'bad',
        //           postback:
        //             'https://chatbotnightingale.herokuapp.com/update-mood-bad'
        //         }
        //       ]
        //     }
        //   }
        // ],
        // source: 'user-info'

        fulfillmentText: `Welcome back ${
          userExists.name
        }! Would you like to talk about your day at school?`,
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

const updateUserInfo = (req, res) => {
  // let mood = req.body.queryResult.parameters.mood;
  updateMood('Nadia', 'bad');
};
