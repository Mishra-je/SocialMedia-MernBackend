const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    socialHandle : {
        type : String,
    },
    images : {
        type : [String],
        required : true
    },
    createdAt : {
        type : Date,
        default : Date.now()
    }
})

const user = mongoose.model('userupload',userSchema);

module.exports = user;