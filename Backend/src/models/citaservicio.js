const mongoose = require("mongoose");

const citaservicioSchema = mongoose.Schema({
    cita:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'cita',
    },
    servicio:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'servicio',
    },
    comentario:{
        type:String,
        unique:false,
        required:true
    },
    proceso:{
        type:Boolean,
        unique:false,
        required:true
    },
    estado:{
        type:Boolean,
        unique:false,
        required:true
    },
    observacion:{
        type:String,
        unique:false,
        required:false
    },
});

module.exports = mongoose.model('citaservicio', citaservicioSchema);