const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const UserSchema = new Schema({
    id: Number,
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    team_name: String,
    team_id: Number,
    position_name: String,
    position_id: String,
    sex: {
        type: String,
        required: true,
    },
    age_years: Number,
    date_of_birth: Date,
    personal_score: Number,
    kudos_sent: Number,
    kudos_received: Number,
    user_picture: String,
});

module.exports = mongoose.model('User', UserSchema);