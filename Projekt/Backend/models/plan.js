const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    date: String,
    activity: String,
    idPlant: String
});

module.exports = mongoose.model('Plan', schema);