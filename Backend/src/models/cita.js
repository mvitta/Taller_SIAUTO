const mongoose = require("mongoose");

const citaSchema = mongoose.Schema({
    cliente:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'cliente',
    },
    vehiculo:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'vehiculo',
    },
    mecanico:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'usuario',
    },
    fecha_ingreso:{
        type: Date,
        unique:false,
        require:true,
        default: new Date()
    },
    valor_total:{
        type: Number,
        unique:false,
        default: 0
    }
});

module.exports = mongoose.model('cita', citaSchema);