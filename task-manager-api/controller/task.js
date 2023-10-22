const messageBundlde = require('../locales/en');
const { SUCCESS, INTERNAL_SERVER_ERROR } = require('../utils/config').STATUS_CODES;
const userOperations = require('../db/services/user-operations');
const tokenOperations = require('../utils/token');

const add = (req,res)=>{

    res.send('Task added.')
}

const view = (req, res) => {

    console.log("Task view.");
}

module.exports = { add, view };