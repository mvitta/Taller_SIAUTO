const mongoose = require("mongoose");

const vehiculoSchema = mongoose.Schema({
    cliente:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'cliente',
    },
    placa:{
        type:String,
        unique:false,
        required:true
    },
    modelo:{
        type:String,
        unique:false,
        required:true
    },
    marca:{
        type:String,
        unique:false,
        required:true
    },
    año:{
        type:Number,
        unique:false,
        required:true
    }
});

module.exports = mongoose.model('vehiculo', vehiculoSchema);