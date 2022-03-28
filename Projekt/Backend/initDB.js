const express = require('express');
const router = express.Router();
const User = require('./models/users');

router.post('/users', async(req, res) => {
    await User.insertMany([
        {
            "firstname": "Laura",
            "lastname": "Kutschan",
            "email": "Laura-Kutschan@gmx.de",
            "password": "sosecure123"
        },
        {
            "firstname": "Jörn",
            "lastname": "Freiheit",
            "email": "Freiheit@htw-berlin.de",
            "password": "sosecure12345!"
        }
    ])
    const allUsers = await User.find();
    console.log('hello');
    res.send(allUsers);
});

module.exports = router;