const express = require('express');

const db = require('./data/dbConfig.js');

const server = express();

server.use(express.json());

const usersRouter = require('./users/usersRouter');
server.use('/api/users', usersRouter);


module.exports = server;