const { Int32 } = require("mongodb");
const mongoose = require("mongoose");

const serviciosAsignadosSchema = mongoose.Schema({
  mecanico: {
    type: String,
    unique: false,
    required: true,
  },
  cliente: {
    type: String,
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
  año: {
    type: String,
    unique: false,
    required: true,
  },
  servicios: {
    type: Array,
    unique: false,
    required: true,
  },
  fecha: {
    type: String,
    unique: false,
    required: true,
  },
  hora: {
    type: String,
    unique: false,
    required: true,
  },
});

module.exports = mongoose.model("serviciosAsignados", serviciosAsignadosSchema);
