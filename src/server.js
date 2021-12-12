const express = require("express");
const {connect, connection } = require('mongoose');
const bodyParser = require('body-parser');
const cors = require("cors");
require('dotenv').config();

const app = express();
app.use(cors());
// parse application/json
app.use(bodyParser.json());

const PORT = process.env.PORT || 9000;

app.listen(PORT, () => console.log("server listening on port", PORT));

app.get('/', (req, res) => {
    res.send("Here is the login");
});

app.get('/appointment', (req, res) => {
    res.send({ express: "Here is the calendar"});
});

app.post('/users', (req, res) => {
    let data = {name: req.body.name, apellido: req.body.lastname};
    console.log(req.body.name)
    console.log(req.body.lastname)
    console.log(req.body.id)
    console.log(req.body.role)
    res.send(JSON.stringify({"status": 200, "error": null, "response": data}))
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