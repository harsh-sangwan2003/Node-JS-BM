const messageBundlde = require('../locales/en');
const { SUCCESS, INTERNAL_SERVER_ERROR } = require('../utils/config').STATUS_CODES;
const userOperations = require('../db/services/user-operations');
const tokenOperations = require('../utils/token');

const login = async (req, res) => {

    console.log(req.body);
    const body = req.body;
    const userObject = { email: body.email, password: body.password };
    const document = await userOperations.login(userObject);

    if (document) {

        let token = tokenOperations.generateToken(document.email);

        res.status(SUCCESS).json({
            message: messageBundlde["login_success"],
            email: document.email,
            token
        })
    }

    else {

        res.status(INTERNAL_SERVER_ERROR).json({
            message: messageBundlde["login_fail"]
        })
    }

}

const register = (req, res) => {

    const body = req.body;
    const userObject = { email: body.email, password: body.password };
    const pr = userOperations.register(userObject);

    pr.then(response => {
        res.status(SUCCESS).json({
            message: messageBundlde["resgister_success"]
        });
    }).catch(err => {

        console.log("Failed during registration: ", err);
        res.status(INTERNAL_SERVER_ERROR).json({
            message: messageBundlde["register_fail"]
        });
    })
}

module.exports = { login, register };