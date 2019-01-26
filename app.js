'use strict';

const express = require('express'),
  bodyParser = require('body-parser'),
  server = express(),
  dbConnection = require('./db/dbConnection'),
  routes = require('./api/Routes/Routes');
// connect to mongo
dbConnection();

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
//register routes
routes(server);

server.listen(process.env.PORT || 8000, function() {
  console.log('Server is up and listening on port' + process.env.PORT);
});
