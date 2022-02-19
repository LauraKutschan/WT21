const mongoose = require('mongoose');
require('dotenv').config();

// connect to mongoDB
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(
        () => { console.log('connected to DB'); },
        err => { console.error.bind(console, 'connection error:') }
    );
const db = mongoose.connection;

module.exports = db;


/*

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
});*/
