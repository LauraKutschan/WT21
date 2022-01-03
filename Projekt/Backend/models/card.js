const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    plant: String
});

module.exports = mongoose.model('Card', schema);