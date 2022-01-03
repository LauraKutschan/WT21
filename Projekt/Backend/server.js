const express = require('express');
const cors = require('cors');
const routesPlan = require('./routes/routesPlan');
const routesCard = require('./routes/routesCard');

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


// connect to mongoDB
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('connected to DB');
});

app.listen(PORT, (error) => {
    if (error) {
        console.log(error);
    } else {
        console.log(`Server started and listening on port ${PORT} ... `);
    }
});