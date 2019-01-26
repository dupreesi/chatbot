const mongoose = require('mongoose');
const config = require('../config');

const dbConnection = () => {
  // get DB url from process.env
  let { dbUrl } = config;

  // create DB connection
  mongoose.connect(
    dbUrl,
    { useNewUrlParser: true }
  );
};

module.exports = dbConnection;
