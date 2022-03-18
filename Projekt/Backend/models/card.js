const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    plant: String,
    user_id: String
});

module.exports = mongoose.model('Card', schema);