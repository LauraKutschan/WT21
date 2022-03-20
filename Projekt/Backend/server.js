const express = require('express');
const cors = require('cors');
const routesPlan = require('./routes/routesPlan');
const routesCard = require('./routes/routesCard');
const routesUsers = require('./routes/routesUsers');
const db = require('./db');

const mongoose = require('mongoose');
require('dotenv').config();
const app = express();
const PORT = 2100;

app.use(express.json());
// enable cors for all requests
app.use(cors());
/*Wenn Sie z.B. nur die get-Anfrage teilen wollen,
dann wählen Sie nicht app.use(cors());, sondern

app.get("/", cors(), (req, res) => {
    res.json({ message: "Hello FIW!" });
});*/
app.use('/', routesPlan);
app.use('/', routesCard);
app.use('/users', routesUsers);

app.listen(PORT, (error) => {
    if (error) {
        console.log(error);
    } else {
        console.log(`Server started and listening on port ${PORT} ... `);
    }
});