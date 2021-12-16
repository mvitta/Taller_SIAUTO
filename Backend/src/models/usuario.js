const mongoose = require("mongoose");

const usuarioSchema = mongoose.Schema({
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
    direccion:{
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
    rol:{
        _id:{
            type: mongoose.Schema.Types.ObjectId, 
            ref : "rol" 
        },
        id_rol:{
            type:String,
            unique:false,
            required:true,
            enum: ["1", "2", "3"]
        },
        nombre_rol:{
            type:String,
            unique:false,
            required:true,
            enum: ['administrador', 'planta', 'mecanico']
        }
    },
    password:{
        type:String,
        unique:false,
        required:true
    },
    fecha_registro: {
        type: Date,
        unique:false,
        require:false,
        default: new Date()
    }
});

module.exports = mongoose.model('usuario', usuarioSchema);

