const mongoose = require("mongoose");
//MongoDB Connection
const URL =
  "mongodb+srv://taller:A1a2b3c4d@proyecto.izsna.mongodb.net/taller?retryWrites=true&w=majority";
mongoose
  .connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
 
  })
  .then(() => console.log("Conectado a la base de datos atlas"))
  .catch((error) => console.log(error));

module.exports = mongoose;
