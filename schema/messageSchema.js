
const mongoose = require('mongoose');
const { Schema } = require('mongoose');


const messageSchema = new mongoose.Schema({
    message: { type: String },
    user: { type: String },
    form : { type: String },
    type : { type: String },

});

module.exports = mongoose.model('message', messageSchema);