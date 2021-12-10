const exp = require("express");
const cors = require("cors")
const morgan = require("morgan");
const path = require("path");
const app = exp();

//configuracion
app.set("port", process.env.PORT || 4000);

// Middlewares
app.use(morgan("dev"));
app.use(exp.json());
app.use(cors())

// routes
app.use("/siAuto", require("./routes/routes"));

// static files
app.use('/siAuto', exp.static(path.join(__dirname, 'public')))

app.listen(app.get("port"), () => {
  console.log(`Escuchando en http://localhost:${app.get("port")}/`);
});
