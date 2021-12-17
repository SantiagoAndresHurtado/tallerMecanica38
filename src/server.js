const axios = require('axios');
const bcrypt = require('bcrypt');
const cors = require("cors");
const express = require("express");
const app = express();
const {connect} = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(__dirname + '/views_react'));

const PORT = process.env.PORT || 9000;

app.listen(PORT, () => console.log("server listening on port", PORT));

const client = axios.create({baseURL: "http://localhost:9000/api/"});

// HOME -------------------------------------------------------------------
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
                response.json({rol: user.data.rol, userid: user.data._id})
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

// AGENDA -------------------------------------------------------------------
app.get('/agendadia/:id', (req, res) => {
    let {id} = req.params
    let today = new Date();
    let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    client
    .get(`citas/${id}/${date}`)
    .then((ans) => res.json(ans.data))
    .catch((error) => res.json({message:error}))
});

app.get('/detallecita/:id', (req, res) => {
    let {id} = req.params
    client
    .get(`citas/${id}`)
    .then((ans) => res.json(ans.data))
    .catch((error) => res.json({message:error}))
});

app.get('/detalleservicio/:id', (req, res) => {
    let {id} = req.params
    client
    .get(`servicios/${id}`)
    .then((ans) => res.json(ans.data))
    .catch((error) => res.json({message:error}))
});

app.post('/actualizacioncitas', (req, res) => {
    client
    .put(`citas/${req.body.idcita}`, {
        "estadoVehiculo":req.body.vestatus,
        "comentario":req.body.comment
    })
    .then((ans) => res.json(ans.data))
    .catch((error) => res.json({message:error}))
});


// REGISTRO -------------------------------------------------------------------
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


// REPORTES -------------------------------------------------------------------
app.post('/consultareportes', (req,res) => {
    let fechainicial = req.body.fechainicial;
    let fechafinal = req.body.fechafinal;
    console.log(fechainicial,fechafinal);
    client
    .get('citas')
    .then((ans) => res.json(ans.data))
    .catch((error) => res.json({message:error}))
})


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
const { replaceOne } = require('./models/cita');

app.use(express.json());
app.use('/api', citaRoutes);
app.use('/api', colaboradorRoutes);
app.use('/api', estadoServicioRoutes);
app.use('/api', estadoVehiculoRoutes);
app.use('/api', rolRoutes);
app.use('/api', servicioRoutes);