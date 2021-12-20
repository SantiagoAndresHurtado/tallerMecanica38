const express = require("express");
const rolSchema = require("../models/rol");
const router = express.Router();

//crear rol
router.post('/roles', (req, res) => {
    const rol = rolSchema(req.body);
    rol
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({message:error}))
});

//encontrar roles
router.get('/roles', (req, res) => {
    rolSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({message:error}))
});

//encontrar rol
router.get('/roles/:id', (req, res) => {
    const {id} = req.params;
    rolSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({message:error}))
});

//cambiar rol
router.put('/roles/:id', (req, res) => {
    const {id} = req.params;
    const {administrador, mecanico, recepcionista} = req.body;
    rolSchema
    .updateOne({_id:id}, {$set: {administrador, mecanico, recepcionista}})
    .then((data) => res.json(data))
    .catch((error) => res.json({message:error}))
});

//borrar rol
router.delete('/roles/:id', (req, res) => {
    const {id} = req.params;
    const {administrador, mecanico, recepcionista} = req.body;
    rolSchema
    .remove({_id:id})
    .then((data) => res.json(data))
    .catch((error) => res.json({message:error}))
});

module.exports = router;