const mongoose = require("mongoose");

const clienteSchema = mongoose.Schema({
    cedula:{
        type:Number,
        unique:true,
        required:true
    },
    nombre:{
        type:String,
        unique:false,
        required:true
    },
    apellido:{
        type:String,
        unique:false,
        required:true
    },
    correo:{
        type:String,
        unique:false,
        required:true
    },
    telefono:{
        type:Number,
        unique:false,
        required:true
    },
    sexo:{
        type:String,
        unique:false,
        required:true,
        enum: ['Masculino', 'Femenino', 'Indiferente'],
    },
    fecha_registro: {
        type: Date,
        unique:false,
        require:false,
        default: new Date()
    }
});

module.exports = mongoose.model('cliente', clienteSchema);