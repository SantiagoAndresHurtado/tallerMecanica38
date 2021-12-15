const express = require("express");
const citaSchema = require("../models/cita");
const router = express.Router();

//crear cita
router.post('/citas', (req, res) => {
    const cita = citaSchema(req.body);
    cita
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({message:error}))
});

//encontrar citas
router.get('/citas', (req, res) => {
    citaSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({message:error}))
});

//encontrar cita por id
// router.get('/citas/:id', (req, res) => {
//     const {id} = req.params;
//     citaSchema
//     .findById(id)
//     .then((data) => res.json(data))
//     .catch((error) => res.json({message:error}))
// });

//encontrar cita por fecha
router.get('/citas/:fecha', (req, res) => {
    const fecha = req.params;
    citaSchema
    .find(fecha)
    .then((data) => res.json(data))
    .catch((error) => res.json({message:error}))
});

//cambiar cita
router.put('/citas/:id', (req, res) => {
    const {id} = req.params;
    const { estadoVehiculo, comentario} = req.body;
    citaSchema
    .updateOne({_id:id}, {$set: {estadoVehiculo, comentario}})
    .then((data) => res.json(data))
    .catch((error) => res.json({message:error}))
    console.log("$$")
    console.log(req.body)
});

//borrar cita
router.delete('/citas/:id', (req, res) => {
    const {id} = req.params;
    const {fecha, hora, placa, idservicio, idempleado, estadoServicio, estadoVehiculo, comentario} = req.body;
    citaSchema
    .remove({_id:id})
    .then((data) => res.json(data))
    .catch((error) => res.json({message:error}))
});

module.exports = router;