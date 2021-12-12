const mongoose = require("mongoose");
const rolSchema = mongoose.Schema({
    administrador:{
        type:Number,
        requires:true
    },
    mecanico:{
        type:Number,
        requires:true
    },
    recepcionista:{
        type:Number,
        requires:true
    }
})
module.exports=mongoose.model('Rol', rolSchema);