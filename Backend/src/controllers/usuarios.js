const express = require('express'); //File is a commonJS module;
const router = express.Router();
const usuariosSchema = require("../models/usuario");
//Crear usuario
router.post('/usuarios',(req,res)=>{
    const usuario = usuariosSchema(req.body);
    usuario
    .save()
    .then(()=>res.json(data))
    .catch((error)=>res.json({message:error}))
});

//Hacer login el usuario
router.post("/usuarios/login",(req,res)=>{
    const {correo, password, rol} = req.body;
    console.log(correo);
    console.log(password);
    console.log(rol);
    usuariosSchema
    .findOne({correo:correo})
    .then((data)=>res.status(200).json(data))
    .catch((error)=>res.json({message:error}))
});

//Obtener todos los usuarios
router.get("/usuarios",(req,res)=>{
    usuariosSchema
    .find()
    .then((data)=> res.status(200).json(data))
    .catch((error)=> res.json({message:error}))
});

//Obtener un usuario en especifico
router.get("/usuarios/:id",(req,res)=>{
    const {id}= req.params;
    usuariosSchema
    .findById(id)
    .then((data)=>res.json(data))
    .catch((error)=> res.json({message:error}))
});

//Actualizar un usuario
router.put("/usuarios/:id",(req,res)=>{
    const {id} = req.params;
    const {cedula, nombre, apellido, correo, direccion, telefono, sexo, rol, password} = req.body;
    
    usuariosSchema
    .updateOne({_id:id},{ $set: {cedula, nombre, apellido, correo, direccion, telefono, sexo, rol, password}})
    .then((data)=>res.json(data))
    .catch((error)=> res.json({message:error}))
});
    
//Eliminar un usuario en especifico
router.delete("/usuarios/:id",(req,res)=>{
    const {id}= req.params;
    usuariosSchema
    .remove({_id:id})
    .then((data)=>res.json(data))
    .catch((error)=> res.json({message:error}))
});

module.exports = router;
    