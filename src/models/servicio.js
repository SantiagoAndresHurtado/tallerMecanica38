const mongoose = require("mongoose");
const servicioSchema = mongoose.Schema({
    nombre:{
        type:String,
        requires:false
    },
    costo:{
        type:String,
        requires:false
    },
    duración:{
        type:String,
        required:false
    },
    descripción:{
        type:String,
        required:false
    },
    estado:{
        type:String,
        required:false
    }
})
module.exports=mongoose.model('Servicio', servicioSchema);