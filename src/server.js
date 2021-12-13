const axios = require('axios');
const cors = require("cors");
const { response } = require('express');
const express = require("express");
const {connect, connection } = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
app.use(cors());
// parse application/json
app.use(bodyParser.json());

const PORT = process.env.PORT || 9000;

app.listen(PORT, () => console.log("server listening on port", PORT));

const client = axios.create({baseURL: "http://localhost:9000/api/"});


app.post('/ingresar', (req, res) => {
    client          
    .get(`colaboradores/${req.body.email}`)
    .then((res) => {
        if (res.data != null && req.body.password==res.data.contrasena){
            console.log("ingreso exitoso")
        }
        else {
            console.log("Usuario o contraseña incorrectos")
        }
    })
    .catch(err =>{
        console.error(err)
    });
});

app.get('/', (req, res) => {
    res.send("Here is the login");
});

app.get('/appointment', (req, res) => {
    res.send({ express: "Here is the calendar"});
});

app.post('/crearUsuario', (req, res) => {
    client
    .post('colaboradores', {
        "nombres": req.body.name, 
        "apellidos": req.body.lastname, 
        "numeroid":req.body.id, 
        "correo":req.body.email, 
        "contrasena":req.body.password, 
        "idrol":req.body.role
    })
    .then((res) => {
        console.log(`statusCode: ${res.status}`)
    })
    .catch(err =>{
        console.error(err)
    });
});

connect(process.env.MONGODB_URI)
.then(() => console.log('Conectado a la base de datos'))
.catch((error) => console.error(error));

const citaRoutes = require("./routes/citas");
const colaboradorRoutes = require("./routes/colaboradores");
const estadoServicioRoutes = require("./routes/estadoServicios");
const estadoVehiculoRoutes = require("./routes/estadoVehiculos");
const rolRoutes = require("./routes/roles");
const servicioRoutes = require("./routes/servicios");

app.use(express.json());
app.use('/api', citaRoutes);
app.use('/api', colaboradorRoutes);
app.use('/api', estadoServicioRoutes);
app.use('/api', estadoVehiculoRoutes);
app.use('/api', rolRoutes);
app.use('/api', servicioRoutes);