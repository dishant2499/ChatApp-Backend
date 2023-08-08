
const mongoose = require('mongoose');
const { Schema } = require('mongoose');


const userSchema = new mongoose.Schema({
    firstname: { type: String },
    email: { type: String },
    password: { type: String }
});

module.exports = mongoose.model('users', userSchema);