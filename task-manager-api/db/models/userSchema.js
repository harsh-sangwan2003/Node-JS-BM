const connection = require('../connection');
const {USERS} = require('../../utils/config').SCHEMA;

const { Schema, SchemaTypes } = require('mongoose');

const userSchema = new Schema({
    email: { type: SchemaTypes.String, required: true, unique: true },
    password: { type: SchemaTypes.String, required: true, min: 8, max: 25 },
    loginTime: { type: SchemaTypes.Date, default: new Date() }
})

const UserModel = connection.model(USERS, userSchema);
module.exports = UserModel;