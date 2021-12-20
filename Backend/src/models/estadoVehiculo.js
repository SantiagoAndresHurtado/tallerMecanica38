const mongoose = require("mongoose");
const estadoVehiculoSchema = mongoose.Schema({
    reparado:{
        type:Number,
        requires:true
    },
    enreparacion:{
        type:Number,
        requires:true
    }
})
module.exports=mongoose.model('EstadoVehiculo', estadoVehiculoSchema);