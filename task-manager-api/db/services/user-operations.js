// CRUD Operations
const UserModel = require('../models/userSchema');
const encrypt = require('../../utils/encrypt');

const userOperations = {

    register(userObject) {

        userObject.password = encrypt.passwordHash(userObject.password);

        return UserModel.create(userObject);
    },
    async login(userObject) {

        try {

            const document = await UserModel.findOne({
                email: userObject.email,
                // password: userObject.password
            });

            if (document && document.email) {

                let encryptedPwd = document.password;
                if (encrypt.compareHash(userObject.password, encryptedPwd))
                    return document;

            }

            return null;

        } catch (err) {

            console.log("Error is: ", err);
        }

    }
}

module.exports = userOperations;