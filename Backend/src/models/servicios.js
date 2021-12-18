const mongoose = require("mongoose");

const serviciosSchema = mongoose.Schema({
  servicio: {
    type: String,
    unique: false,
    required: true,
  },
  decripcion: {
    type: String,
    unique: false,
    required: true,
  },
  duracion: {
    type: String,
    unique: false,
    required: true,
  },
});

module.exports = mongoose.model("servicios", serviciosSchema);
