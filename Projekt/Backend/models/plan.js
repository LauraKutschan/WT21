const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    plant: String,
    date: String,
    activity: String
});

module.exports = mongoose.model('Plan', schema);