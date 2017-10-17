const mongoose = require('mongoose');
const {Schema} = mongoose;

//Schema of Recipient person
const recipientSchema = new Schema({
    email: String,
    responded: {type: Boolean, default: false}
});

module.exports = recipientSchema;