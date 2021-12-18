const express = require("express"); //File is a commonJS module;
const router = express.Router();
const usuariosSchema = require("../models/usuario");
const serviciosSchema = require("../models/servicios");
const citasSchema = require("../models/citas");
const serviciosAsignadosSchema = require("../models/serviciosAsignados");
//registra una usuario en la base de datos
router.post("/agregarUsuarios", (req, res) => {
  const usuario = usuariosSchema(req.body);
  usuario
    .save()
    .then(() => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//Hacer login el usuario
router.post("/login", (req, res) => {
  const correo = req.body;

  usuariosSchema
    .findOne(correo)
    .then((data) => {
      console.log(data);
      return res.json(data);
    })
    .catch((err) => res.json({ error: err }));
});

//obtiene los usuarios de planta
router.get("/usuariosPlantas", (req, res) => {
  usuariosSchema
    .find({ rol: "planta" })
    .then((data) => res.status(200).json(data))
    .catch((error) => res.json({ message: error }));
});

// obtiene los usuarios mecanicos
router.get("/usuariosMecanicos", (req, res) => {
  usuariosSchema
    .find({ rol: "mecanico" })
    .then((data) => res.status(200).json(data))
    .catch((error) => res.json({ message: error }));
});

router.get("/servicios", (req, res) => {
  serviciosSchema
    .find()
    .then((data) => res.status(200).json(data))
    .catch((error) => res.json({ message: error }));
});

router.get("/citas", (req, res) => {
  citasSchema
    .find()
    .then((data) => res.status(200).json(data))
    .catch((error) => res.json({ message: error }));
});

router.get("/serviciosAginados", (req, res) => {
  serviciosAsignadosSchema
    .find()
    .then((data) => res.status(200).json(data))
    .catch((error) => res.json({ message: error }));
});

router.post("/servicioEnProceso", (req, res) => {
  const id = req.body;
  serviciosAsignadosSchema
    .findById(id.id)
    .then((data) => res.status(200).json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;
