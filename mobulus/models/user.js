const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    
    username:{
        type: String,
        required : true,
    },
    password:{
        type: String,
        required : true,
    },
    email:{
        type: String,
        required: true,
    },
    gender:{
        type: String,
        required: true,
    },
    Phone:{
        type: Number,
        required:true,
    },
    age:{
        type:Number,
        default:0
    }
});

module.exports = mongoose.model('Register', UserSchema);