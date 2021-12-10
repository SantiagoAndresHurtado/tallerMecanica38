const express = require("express");
const bodyParser = require('body-parser');
const cors = require("cors");

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