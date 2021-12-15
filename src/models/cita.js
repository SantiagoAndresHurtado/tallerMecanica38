const mongoose = require("mongoose");
const citaSchema = mongoose.Schema({
    fecha:{
        type:String,
        requires:true
    },
    hora:{
        type:String,
        required:true
    },
    placa:{
        type:String,
        required:true
    },
    servicio:{
        type:String,
        required:true
    },
    empleado:{
        type:String,
        required:true
    },
    estadoServicio:{
        type:String,
        required:true
    },
    estadoVehiculo:{
        type:String,
        required:true
    },
    comentario:{
        type:String,
        required:true
    }
})
module.exports=mongoose.model('Cita', citaSchema);