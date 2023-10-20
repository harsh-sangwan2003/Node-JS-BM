const { JSON } = require('../config').CONTENT.TYPE;

module.exports = (req, res, next) => {

    res.set(
        {"Content-Type": JSON}
    );

    // Go to next middleware
    next();
}