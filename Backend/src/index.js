const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const path = require("path");
const bodyParser = require("body-parser");
require("./config/db");
require("dotenv").config();

const app = express();

//configuracion
const port = process.env.PORT || 4000;

// Middlewares
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// routes

app.use("/", require("./router/routes"));

// static file
// app.use("/siAuto", express.static(path.join(__dirname, "public")));

app.listen(port, () => {
  console.log(`Escuchando en http://localhost:${port}/`);
});
