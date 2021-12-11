const exp = require("express");
const router = exp.Router();

router.get("/inicio", (req, res) => {
  // send: para enviar texto
  res.send("Hola Mundo desde el archivo reoutes !");
});

router.get("/usuariosMecanico", (req, res) => {
  res.json([
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
  ]);
});

router.post("/salida", (req, res) => {
  res.json("Peticion recibida en el servidor");
  // esto es lo que va en la base de datos
  const datoDelFront = req.body;
  datoDelFront.map((elemento) => {
    console.log(elemento);
  });
});

module.exports = router;
