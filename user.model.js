const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({  
    Login:
        {
        user:String,
        pass: String
        },
    Origin:{
        firstname: String,
        age: Number,
        email: String
        }
});

module.exports = mongoose.model('User', UserSchema);