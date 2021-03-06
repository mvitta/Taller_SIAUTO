const mongoose = require("mongoose");

const usuarioSchema = mongoose.Schema({
  cedula: {
    type: Number,
    unique: true,
    required: true,
  },
  nombre: {
    type: String,
    unique: false,
    required: true,
  },
  apellido: {
    type: String,
    unique: false,
    required: true,
  },
  correo: {
    type: String,
    unique: false,
    required: true,
  },
  direccion: {
    type: String,
    unique: false,
    required: true,
  },
  telefono: {
    type: Number,
    unique: false,
    required: true,
  },
  sexo: {
    type: String,
    unique: false,
    required: true,
    enum: ["Masculino", "Femenino", "Indiferente"],
  },
  rol: {
    type: String,
    unique: false,
    required: true,
  },
  password: {
    type: String,
    unique: false,
    required: true,
  },
  fecha_registro: {
    type: Date,
    unique: false,
    require: false,
  },
});

module.exports = mongoose.model("usuario", usuarioSchema);
