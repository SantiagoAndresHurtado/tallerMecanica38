const mongoose = require("mongoose");
const citaSchema = mongoose.Schema({
    fecha:{
        type:String,
        required:false
    },
    hora:{
        type:String,
        required:false
    },
    placa:{
        type:String,
        required:false
    },
    servicio:{
        type:String,
        required:false
    },
    empleado:{
        type:String,
        required:false
    },
    estadoServicio:{
        type:String,
        required:false
    },
    estadoVehiculo:{
        type:String,
        required:false
    },
    comentario:{
        type:String,
        required:false
    }
})
module.exports=mongoose.model('Cita', citaSchema);