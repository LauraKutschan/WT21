const express = require('express');
const cors = require('cors');
const routesPlan = require('./routes/routesPlan');
const routesCard = require('./routes/routesCard');
const routesUsers = require('./routes/routesUsers');
const db = require('./db');
const initDB = require('./initDB');
const mongoose = require('mongoose');
require('dotenv').config();
const app = express();
const PORT = 2100;

app.use(express.json());
app.use(cors());
//app.use('/initDB', initDB);
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