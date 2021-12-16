const express = require('express'); //File is a commonJS module;
const router = express.Router();
const rolesSchema = require("../models/rol");
//Crear rol
router.post('/roles',(req,res)=>{
    const roles = rolesSchema(req.body);
    roles
    .save()
    .then(()=>res.json(data))
    .catch((error)=>res.json({message:error}))
});

//Obtener todos los roles
router.get("/roles",(req,res)=>{
    rolesSchema
    .find()
    .then((data)=> res.status(200).json(data))
    .catch((error)=> res.json({message:error}))
});

//Obtener un rol en especifico
router.get("/roles/:id",(req,res)=>{
    const {id}= req.params;
    rolesSchema
    .findById(id)
    .then((data)=>res.json(data))
    .catch((error)=> res.json({message:error}))
});

//Actualizar un rol en especifico
router.put("/roles/:id",(req,res)=>{
    const {id} = req.params;
    const {id_rol,nombre_rol} = req.body; 
    rolesSchema
    .updateOne({_id:id},{ $set: {id_rol,nombre_rol}})
    .then((data)=>res.json(data))
    .catch((error)=> res.json({message:error}))
});
    
//Eliminar un rol en especifico
router.delete("/roles/:id",(req,res)=>{
    const {id}= req.params;
    rolesSchema
    .remove({_id:id})
    .then((data)=>res.json(data))
    .catch((error)=> res.json({message:error}))
});

module.exports = router;
    


