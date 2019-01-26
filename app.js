'use strict';

const express = require('express'),
  bodyParser = require('body-parser'),
  http = require('http'),
  dbConnection = require('./db/dbConnection'),
  routes = require('./api/Routes/Routes');
// connect to mongo
dbConnection();
const server = express();

server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());
//register routes
server.use(routes);
const PORT = process.env.PORT;

server.listen(3333 || PORT);

module.exports = server;
