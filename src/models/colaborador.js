const mongoose = require("mongoose");
const colaboradorSchema = mongoose.Schema({
    nombres:{
        type:String,
        requires:true
    },
    apellidos:{
        type:String,
        required:true
    },
    numeroid:{
        type:Number,
        required:true
    },
    idrol:{
        type:String,
        required:true
    },
    correo:{
        type:String,
        required:true
    },
    contraseña:{
        type:String,
        required:true
    }
})
module.exports=mongoose.model('Colaborador', colaboradorSchema);