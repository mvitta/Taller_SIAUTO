const mongoose = require("mongoose");

const permisoSchema = mongoose.Schema({
    id_permiso:{
        type:Number,
        unique:false,
        required:true
    },
    valor:{
        type:String,
        unique:false,
        required:true
    },
    permisos:[
        {
            type: String,
            enum: ["1", "2", "3"]
        }
    ],
    ruta:{
        type:String,
        unique:false,
        required:true
    }
});

module.exports = mongoose.model('permiso', permisoSchema);