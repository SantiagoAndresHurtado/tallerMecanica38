const axios = require('axios');
const bcrypt = require('bcrypt');
const cors = require("cors");
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


app.post('/ingresar', (request, response) => {
    let password = request.body.password;
    client          
    .get(`colaboradores/${request.body.email}`)
    .then(user => {
        if (user.data == null ){
            console.log("not found")
            // return res.status(404).json({
            // errors: [{ user: "not found" }],
            // });
        } else {
            bcrypt.compare(password, user.data.contrasena)
            .then(isMatch => {
                if (!isMatch) {
                    console.log("password incorrect")
                    response.json({rol: null})
                    // return res.status(400).json({ errors: [{ password:"incorrect" }] 
                    // });
                }
                response.json({rol: user.data.rol})
            }).catch(err => {
                console.log(err)
                // user.status(500).json({ erros: err });
            });
        }
    }).catch(err => {
        res.status(500).json({ erros: err });
    });
});

app.get('/', (req, res) => {
    res.send("Here is the login");
});

app.get('/appointment', (req, res) => {
    res.send({ express: "Here is the calendar"});
});

app.post('/crearUsuario', (req, res) => {
    let nombres = req.body.name;
    let apellidos =  req.body.lastname;
    let numeroid = req.body.id;
    let correo = req.body.email;
    let contrasena = req.body.password;
    let idrol = req.body.role;
    client     
    .get(`colaboradores/${req.body.email}`)
    .then(user=>{
        if (user.data != null){
            console.log("email already exists")
            // return res.status(422).json({ errors: [{ user: "email already exists" }] });
        }else {
            bcrypt.genSalt(10, function(err, salt) {bcrypt.hash(contrasena, salt, function(err, hash) {
                if (err) throw err;
                client
                .post('colaboradores', {
                    "nombres": nombres,
                    "apellidos": apellidos,
                    "numeroid": numeroid,
                    "correo": correo,
                    "contrasena": hash,
                    "rol": idrol
                })
                .then(response => {
                    res.status(200).json({
                    success: true,
                    result: response
                    })
                })
                .catch(err => {
                    res.status(500).json({
                        errors: [{ error: err }]
                    });
                });
            });
            });
        }
    }).catch(err =>{
        res.status(500).json({
            errors: [{ error: 'Something went wrong' }]
        });
  })
});


// API para la base de datos
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