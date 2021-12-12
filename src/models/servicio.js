const mongoose = require("mongoose");
const servicioSchema = mongoose.Schema({
    nombre:{
        type:String,
        requires:true
    },
    costo:{
        type:String,
        requires:true
    },
    duración:{
        type:String,
        required:true
    },
    descripción:{
        type:String,
        required:true
    },
    estado:{
        type:String,
        required:true
    }
})
module.exports=mongoose.model('Servicio', servicioSchema);