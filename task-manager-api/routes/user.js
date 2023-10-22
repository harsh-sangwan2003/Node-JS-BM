const express = require('express');
const route = express.Router();
const {login,register} = require('../controller/user');
const {LOGIN,REGISTER} = require('../utils/config').ROUTES.USER;
const userOperations = require('../db/services/user-operations');

route.post(LOGIN,login);

route.post(REGISTER,register);

module.exports = route;