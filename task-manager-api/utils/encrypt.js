const bcrypt = require('bcrypt');

const encrypt = {

    SALT:10,
    passwordHash(plainPassword){

        return bcrypt.hashSync(plainPassword,this.SALT);
    },
    compareHash(plainPassword,dbPassword){

        return bcrypt.compareSync(plainPassword,dbPassword);
    }
}

module.exports = encrypt;