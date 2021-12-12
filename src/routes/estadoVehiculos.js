const express = require("express");
const estadoVehiculoSchema = require("../models/estadoVehiculo");
const router = express.Router();

//crear estadoVehiculo
router.post('/estadoVehiculos', (req, res) => {
    const estadoVehiculo = estadoVehiculoSchema(req.body);
    estadoVehiculo
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({message:error}))
});

//encontrar estadoVehiculos
router.get('/estadoVehiculos', (req, res) => {
    estadoVehiculoSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({message:error}))
});

//encontrar estadoVehiculo
router.get('/estadoVehiculos/:id', (req, res) => {
    const {id} = req.params;
    estadoVehiculoSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({message:error}))
});

//cambiar estadoVehiculo
router.put('/estadoVehiculos/:id', (req, res) => {
    const {id} = req.params;
    const {reparado, enreparacion} = req.body;
    estadoVehiculoSchema
    .updateOne({_id:id}, {$set: {reparado, enreparacion}})
    .then((data) => res.json(data))
    .catch((error) => res.json({message:error}))
});

//borrar estadoVehiculo
router.delete('/estadoVehiculos/:id', (req, res) => {
    const {id} = req.params;
    const {reparado, enreparacion} = req.body;
    estadoVehiculoSchema
    .remove({_id:id})
    .then((data) => res.json(data))
    .catch((error) => res.json({message:error}))
});

module.exports = router;