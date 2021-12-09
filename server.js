const express = require('express');
const app = express();
const port = process.env.PORT||9000;

app.listen(port, ()=> console.log("server listening on port", port));

app.get('/', (req, res) => {
    res.send("Here is the login");
});

app.get('/appointment', (req, res) => {
    res.send({ express: "Here is the calendar"});
});

app.get('/employee', (req, res) => {
    res.send("Here is the employee information");
});