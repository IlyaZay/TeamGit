const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const KudoSchema = new Schema({
    id: Number,
    text: String,
    date: Date,
    sender_id: Number,
    receiver_id: Number,
    theme_id: Number,
    theme_name: String,
    answered: Boolean,
    complexity: Number,
});

module.exports = mongoose.model('Kudo', KudoSchema);