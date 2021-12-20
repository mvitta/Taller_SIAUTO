const express = require("express"); //File is a commonJS module;
const router = express.Router();
const usuariosSchema = require("../models/usuario");
const serviciosSchema = require("../models/servicios");
const citasSchema = require("../models/citas");

//registra una usuario en la base de datos
router.post("/agregarUsuarios", (req, res) => {
  const usuario = usuariosSchema(req.body);
  usuario
    .save()
    .then(() => res.json({ message: "Registro Exitoso" }))
    .catch((error) =>
      res.json({ titulo: "No se pudo registrar el usuario", message: error })
    );
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
    .catch((err) => res.json({ message: err }));
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

router.post("/servicioEnProceso", (req, res) => {
  const id = req.body;
  console.log(id);

  citasSchema
    .findById(id.id)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((error) => res.json({ messageResponse: "error" }));
});

router.post("/usuariosBorrar", (req, res) => {
  const id = req.body;
  console.log(id);
  usuariosSchema
    .remove(id)
    .then((data) =>
      res.status(200).json({ message: "Registro borrado con exito" })
    )
    .catch((error) =>
      res.json({ titulo: "error en la peticion", message: error })
    );
});

router.post("/citaBorrar", (req, res) => {
  const id = req.body;
  console.log(id);
  citasSchema
    .remove(id)
    .then((data) =>
      res.status(200).json({ message: "Registro borrado con exito" })
    )
    .catch((error) =>
      res.json({ titulo: "error en la peticion", message: error })
    );
});

router.post("/serviciosBorrar", (req, res) => {
  const id = req.body;
  console.log(id);
  serviciosSchema
    .remove(id)
    .then((data) =>
      res.status(200).json({ message: "Registro borrado con exito" })
    )
    .catch((error) =>
      res.json({ titulo: "error en la peticion", message: error })
    );
});

router.post("/citas", (req, res) => {
  console.log(req.body);
  const cita = citasSchema(req.body);
  cita
    .save()
    .then(() => res.json({ message: "Registro Exitoso" }))
    .catch((error) =>
      res.json({ titulo: "No se pudo registrar la cita", message: error })
    );
});

router.put("/usuariosEditar", (req, res) => {
  const id = req.body.id;
  const { nombre, cedula, apellido, correo, direccion, telefono, sexo } =
    req.body;

  console.log(req.body.id);
  console.log(nombre, apellido, cedula, correo, direccion, telefono, sexo);

  usuariosSchema
    .updateOne(
      { _id: id },
      {
        $set: { nombre, apellido, cedula, correo, direccion, telefono, sexo },
      }
    )
    .then(() => res.json({ message: "Actualizacion Exitosa" }))
    .catch((error) => res.json({ titulo: "Error", message: error }));
});

router.put("/citas", (req, res) => {
  const id = req.body.id;
  const {
    frenos,
    pastillas,
    discos,
    suspension,
    amortiguadores,
    aceite,
    alineacion,
    rotacion,
  } = req.body;

  console.log(req.body.id);
  console.log(
    frenos,
    pastillas,
    discos,
    suspension,
    amortiguadores,
    aceite,
    alineacion,
    rotacion
  );

  citasSchema
    .updateOne(
      { _id: id },
      {
        $set: {
          frenos,
          pastillas,
          discos,
          suspension,
          amortiguadores,
          aceite,
          alineacion,
          rotacion,
        },
      }
    )
    .then(() => res.json({ message: "Actualizacion Exitosa" }))
    .catch((error) => res.json({ titulo: "Error", message: error }));
});

module.exports = router;
