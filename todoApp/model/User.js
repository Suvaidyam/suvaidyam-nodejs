require('./dbConnection');

const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    name: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    deletedAt: { type: Date, default: null },
    deleted: { type: Boolean, default: false }
})

const User = mongoose.model('User', UserSchema);

module.exports = {
    User: User
};
