const messageBundlde = require('../locales/en');
const { SUCCESS } = require('../utils/config').STATUS_CODES;

const login = (req, res) => {

    console.log(req.body);
    res.status(SUCCESS).json({
        message: messageBundlde["login_success"]
    })
}

const register = (req, res) => {

    res.status(SUCCESS).json({
        message: messageBundlde["resgister_success"]
    });
}

module.exports = { login, register };