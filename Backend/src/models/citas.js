const mongoose = require("mongoose");

const citasSchema = mongoose.Schema({
  placa: {
    type: String,
    unique: false,
    required: true,
  },
  apellido: {
    type: String,
    unique: false,
    required: true,
  },
  año: {
    type: Number,
    unique: false,
    required: true,
  },
  cedula: {
    type: Number,
    unique: false,
    required: true,
  },
  marca: {
    type: String,
    unique: false,
    required: true,
  },

  modelo: {
    type: String,
    unique: false,
    required: true,
  },

  nombre: {
    type: String,
    unique: false,
    required: true,
  },

  mecanico: {
    type: String,
    unique: false,
    required: true,
  },

  aceite: {
    type: Boolean,
    unique: false,
  },

  alineacion: {
    type: Boolean,
    unique: false,
  },

  amortiguadores: {
    type: Boolean,
    unique: false,
  },

  discos: {
    type: Boolean,
    unique: false,
  },

  frenos: {
    type: Boolean,
    unique: false,
  },

  pastillas: {
    type: Boolean,
    unique: false,
  },

  rotacion: {
    type: Boolean,
    unique: false,
  },

  suspension: {
    type: Boolean,
    unique: false,
  },

  fecha: {
    type: Date,
    unique: false,
    required: true,
  },
});

module.exports = mongoose.model("citas", citasSchema);
