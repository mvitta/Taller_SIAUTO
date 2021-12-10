const exp = require('express')
const router = exp.Router()

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
  

  module.exports = router;
