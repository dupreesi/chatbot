'use strict';

const express = require('express'),
  bodyParser = require('body-parser'),
  http = require('http'),
  dbConnection = require('./db/dbConnection'),
  routes = require('./api/Routes/Routes'),
  bot = require('./api/bot/index');
// connect to mongo
dbConnection();
const server = express();

server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());
//register routes
server.use(routes);
server.use('/bot', bot);
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Our app is running on port ${PORT}`);
});
module.exports = server;
