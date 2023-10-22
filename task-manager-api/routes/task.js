const express = require('express');
const route = express.Router();
const controller = require('../controller/task');

route.get("/add",controller.add);

route.get("/view",controller.view);

module.exports = route;