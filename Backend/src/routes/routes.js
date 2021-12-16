const exp = require("express");
const router = exp.Router();

/**
 * const datos = [
  {
    nombre: "Maikol",
    apellido: "Vitaa",
    cedula: "1140839683",
    correo: "maikol@correo.com",
    direccion: "cra 22 # 23 - 34",
    telefono: "315716711",
    sexo: "masculino",
  },
  {
    nombre: "jean",
    apellido: "Vitaa",
    cedula: "1050839683",
    correo: "Jean@correo.com",
    direccion: "cra 50 # 23 - 34",
    telefono: "3452356792",
    sexo: "masculino",
  },
];
 * 
 */


router.get("perfil", (req, res) => {});

router.get("/usuariosPlanta", (req, res) => {
  res.json(datos);
});

router.post("/registrarUsuarioPlanta", (req, res) => {
  res.json("Peticion recibida en el servidor");
  // esto es lo que va en la base de datos
  const datoDelFront = req.body;
  datos.unshift(datoDelFront);
  console.log(datos);
  console.log(datos.length);
});

router.get("/usuariosMecanico", (req, res) => {
  res.json(datos);
});

router.post("/registrarUsuarioMecanico", (req, res) => {});

router.get("/configuracionServicio", (req, res) => {});

router.get("/agendaCitas", (req, res) => {});

router.post("/programarCitas", (req, res) => {});

router.get("/serviciosAsignados", (req, res) => {});

router.get("/serviciosEnProceso", (req, res) => {});

router.post("/serviciosEnProceso", (req, res) => {});

router.get("/servicioTerminados", (req, res) => {});

module.exports = router;
