const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const PositionSchema = new Schema({
    id: Number,
    title: String
});

module.exports = mongoose.model('Position', PositionSchema);