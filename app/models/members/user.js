const mongoose = require('mongoose');

// User Schema
const UserSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    surname:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true,
        select: false,
    }
});

const User = module.exports = mongoose.model('users', UserSchema);