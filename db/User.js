const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema

const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: String
  }
});

module.exports = User = mongoose.model('users', UserSchema);
