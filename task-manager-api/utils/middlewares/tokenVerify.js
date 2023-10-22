const { FILE_NOT_FOUND } = require('../config').STATUS_CODES;
const { verifyToken } = require('../token');

module.exports = (req, res, next) => {

    const tokenId = req.header('authorization');

    if (verifyToken(tokenId)) {

        next();
    }

    else {
        res.status(FILE_NOT_FOUND).json({
            messaage: "Invalid token! Please login first"
        })
    }
}