'use strict';
// load model
const User = require('./User');

const updateMood = (name, mood) => {
  User.findOneAndUpdate(
    { name: name },
    { $set: { mood: mood } },
    { new: true },
    (err, doc) => {
      if (err) {
        console.log('Something wrong when updating data!');
      }
      console.log(doc);
    }
  );
};

module.exports = updateMood;
