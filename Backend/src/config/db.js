'use strict'
require("dotenv").config();
const mongoose = require("mongoose")
//MongoDB Connection
mongoose.connect(process.env.MONGODB_URI)
.then(()=> console.log('Conectado a la base de datos atlas'))
.catch((error)=>console.log(error));

module.exports = mongoose; 