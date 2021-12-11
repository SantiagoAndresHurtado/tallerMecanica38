const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
    name:{
        type:String,
        requires:true
    },
    age:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        required:true
    }
})
module.exports=mongoose.model('User', userSchema);