const exp = require("express");
const router = exp.Router();

router.get("/inicio", (req, res) => {
  // send: para enviar texto
  res.send("Hola Mundo desde el archivo reoutes !");
});

router.get("/seccion1", (req, res) => {
  // json: especifica que devulve un objeto de javascript
  res.json({
    nombre: "Jean",
    apellido: "vitta",
  });
});

router.post("/salida", (req, res) => {
  res.send("Peticion recibida");
  // esto es lo que va en la base de datos
  const datoDelFront = req.body;
  datoDelFront.map((elemento) => {
    console.log(elemento);
  });
 
});

module.exports = router;
