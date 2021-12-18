const mongoose = require("mongoose");

const citasSchema = mongoose.Schema({
  placa: {
    type: String,
    unique: false,
    required: true,
  },
  frenos: {
    type: Boolean,
    unique: false,
    required: true,
  },
  pastillas: {
    type: Boolean,
    unique: false,
    required: true,
  },
  discos: {
    type: Boolean,
    unique: false,
    required: true,
  },
  suspension: {
    type: Boolean,
    unique: false,
    required: true,
  },
  amortiguadores: {
    type: Boolean,
    unique: false,
    required: true,
  },
  aceite: {
    type: Boolean,
    unique: false,
    required: true,
  },
  alineacion: {
    type: Boolean,
    unique: false,
    required: true,
  },
  rotacion: {
    type: Boolean,
    unique: false,
    required: true,
  },
});

module.exports = mongoose.model("citas", citasSchema);
