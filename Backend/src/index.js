const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require("./config/db")


const app = express();

//configuracion
const port = process.env.PORT || 4000;
app.listen(port, ()=> console.log("server listening on port", port));

// Middlewares
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// routes
app.use(express.json());
app.use("/siAutos", require("./routes/roles.js"));
app.use("/siAutos", require("./routes/permisos.js"));
app.use("/siAutos", require("./routes/usuarios.js"));




// static files

/**
 * app.use("/siAuto", express.static(path.join(__dirname, "public")));

app.listen(app.get("port"), () => {
  console.log(`Escuchando en http://localhost:${app.get("port")}/`);
});
*/
