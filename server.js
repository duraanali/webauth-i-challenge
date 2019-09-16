const express = require('express');

const db = require('./data/dbConfig.js');

const server = express();

server.use(express.json());

const usersRouter = require('./users/usersRouter');
server.use('/api/users', usersRouter);

const loginRouter = require('./login/loginRouter');
server.use('/api/login', loginRouter);

const registerRouter = require('./register/registerRouter');
server.use('/api/register', registerRouter);

module.exports = server;