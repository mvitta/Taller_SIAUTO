const mongoose = require("mongoose");

const servicioSchema = mongoose.Schema({
    nombre:{
        type:String,
        unique:false,
        required:true
    },
    descripcion:{
        type:String,
        unique:false,
        required:false
    },
    duracion:{
        type:Number,
        unique:false,
        required:true
    },
    costo:{
        type:Number,
        unique:false,
        required:true
    },
    disponible:{
        type:Boolean,
        unique:false,
        required:true
    },
    imagen:{
        type:String,
        unique:false,
        required:false
    },
});

module.exports = mongoose.model('servicio', servicioSchema);