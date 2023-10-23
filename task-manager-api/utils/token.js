const jwt = require('jsonwebtoken');

module.exports = {

    SECRET: process.env.SECRET,
    generateToken(emailid) {

        let tokenId = jwt.sign({ userid: emailid }, process.env.SECRET, { expiresIn: '24h' });
        console.log(tokenId);
        return tokenId
    },
    verifyToken(tokenId) {

        try {

            let decode = jwt.verify(tokenId, process.env.SECRET);
            return decode && decode.emailid;

        } catch (err) {

            console.log("Error is: ",err);
            return null;
        }
    }
}