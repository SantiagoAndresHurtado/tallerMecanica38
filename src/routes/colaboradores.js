const express = require("express");
const colaboradorSchema = require("../models/colaborador");
const router = express.Router();

//crear usuario
router.post('/colaboradores', (req, res) => {
    const colaborador = colaboradorSchema(req.body);
    console.log(req.body)
    colaborador
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({message:error}))
});

//encontrar usuarios
router.get('/colaboradores', (req, res) => {
    colaboradorSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({message:error}))
});

//encontrar usuario por email
router.get('/colaboradores/:correo', (req, res) => {
    const correo = req.params;
    colaboradorSchema
    .findOne(correo)
    .then((data) => res.json(data))
    .catch((error) => {
        console.log(error),
        res.json({message:error})
    })
});

//cambiar usuario
router.put('/colaboradores/:id', (req, res) => {
    const {id} = req.params;
    const {nombres, apellidos, numeroid, idrol, correo, contraseña} = req.body;
    colaboradorSchema
    .updateOne({_id:id}, {$set: {nombres, apellidos, numeroid, idrol, correo, contraseña}})
    .then((data) => res.json(data))
    .catch((error) => res.json({message:error}))
});

//borrar usuario
router.delete('/colaboradores/:id', (req, res) => {
    const {id} = req.params;
    const {nombres, apellidos, numeroid, idrol, correo, contraseña} = req.body;
    colaboradorSchema
    .remove({_id:id})
    .then((data) => res.json(data))
    .catch((error) => res.json({message:error}))
});

module.exports = router;