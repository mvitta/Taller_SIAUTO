const mongoose = require("mongoose");

const rolSchema = mongoose.Schema({
    id_rol:{
        type:Number,
        unique:true,
        required:true
    },
    nombre_rol:{
        type:String,
        unique:false,
        required:true,
        enum:["administrador","planta","mecanico"]
    }
});

module.exports = mongoose.model('rol', rolSchema);