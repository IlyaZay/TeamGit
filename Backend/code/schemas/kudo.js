const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const KudoSchema = new Schema({
    id: Number,
    text: String,
    date: Date,
    sender_first_name: String,
    sender_last_name: String,
    sender_id: Number,
    receiver_first_name: String,
    receiver_last_name: String,
    receiver_id: Number,
    theme_id: Number,
    theme_name: String,
    answered: {
        type: Boolean,
        default: false
    },
    complexity: Number,
});

module.exports = mongoose.model('Kudo', KudoSchema);