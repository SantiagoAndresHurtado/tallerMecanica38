const express = require("express");
const estadoServicioSchema = require("../models/estadoServicio");
const router = express.Router();

//crear estadoServicio
router.post('/estadoServicios', (req, res) => {
    const estadoServicio = estadoServicioSchema(req.body);
    estadoServicio
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({message:error}))
});

//encontrar estadoServicios
router.get('/estadoServicios', (req, res) => {
    estadoServicioSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({message:error}))
});

//encontrar estadoServicio
router.get('/estadoServicios/:id', (req, res) => {
    const {id} = req.params;
    estadoServicioSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({message:error}))
});

//cambiar estadoServicio
router.put('/estadoServicios/:id', (req, res) => {
    const {id} = req.params;
    const {disponible, nodisponible} = req.body;
    estadoServicioSchema
    .updateOne({_id:id}, {$set: {disponible, nodisponible}})
    .then((data) => res.json(data))
    .catch((error) => res.json({message:error}))
});

//borrar estadoServicio
router.delete('/estadoServicios/:id', (req, res) => {
    const {id} = req.params;
    const {disponible, nodisponible} = req.body;
    estadoServicioSchema
    .remove({_id:id})
    .then((data) => res.json(data))
    .catch((error) => res.json({message:error}))
});

module.exports = router;