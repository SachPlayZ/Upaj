const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    fullname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    
});

const UserModel = mongoose.model('User', userSchema);

module.exports = UserModel;