const jwt = require('jsonwebtoken');

module.exports = {

    SECRET: process.env.SECRET,
    generateToken(emailid) {

        let tokenId = jwt.sign({ userid: emailid }, this.SECRET, { expiresIn: '1h' });
        return tokenId;
    },
    verifyToken(tokenId) {

        try {

            let decode = jwt.verify(tokenId, this.SECRET);
            return decode && decode.emailid;

        } catch (err) {

            console.log("Error is: ",err);
            return null;
        }
    }
}