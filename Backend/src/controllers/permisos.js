const express = require('express'); //File is a commonJS module;
const router = express.Router();
const permisosSchema = require("../models/permisos");
//Crear permiso
router.post('/permisos',(req,res)=>{
    const user = permisosSchema(req.body);
    user
    .save()
    .then(()=>res.json(data))
    .catch((error)=>res.json({message:error}))
});

//Obtener todos los permisos
router.get("/permisos",(req,res)=>{
    permisosSchema
    .find()
    .then((data)=> res.status(200).json(data))
    .catch((error)=> res.json({message:error}))
});

//Obtener un permiso especifico en especifico
router.get("/permisos/:id",(req,res)=>{
    const {id}= req.params;
    permisosSchema
    .findById(id)
    .then((data)=>res.json(data))
    .catch((error)=> res.json({message:error}))
});

//Actualizar un permiso en especifico
router.put("/permisos/:id",(req,res)=>{
    const {id} = req.params;
    const {id_permiso,valor,permiso,ruta} = req.body; 
    permisosSchema
    .updateOne({_id:id},{ $set: {id_permiso,valor,permiso,ruta}})
    .then((data)=>res.json(data))
    .catch((error)=> res.json({message:error}))
});
    
//Eliminar un permiso en especifico
router.delete("/permisos/:id",(req,res)=>{
    const {id}= req.params;
    permisosSchema
    .remove({_id:id})
    .then((data)=>res.json(data))
    .catch((error)=> res.json({message:error}))
});

module.exports = router;
    