const mongoose = require("mongoose");
const estadoServicioSchema = mongoose.Schema({
    disponible:{
        type:Number,
        requires:true
    },
    nodisponible:{
        type:Number,
        requires:true
    }
})
module.exports=mongoose.model('EstadoServicio', estadoServicioSchema);