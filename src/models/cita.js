const mongoose = require("mongoose");
const citaSchema = mongoose.Schema({
    fecha:{
        type:Date,
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
    idservicio:{
        type:String,
        required:false
    },
    idcolaborador:{
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