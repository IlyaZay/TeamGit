const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const UserSchema = new Schema({
    id: Number,
    first_name: {
        type: String,
        required: true,
    },
    last_name:{
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    manager_id: String,
    team_name: String,
    team_id: Number,
    position_name: String,
    position_id: String,
    sex: {
        type: String,
        required: true,
    },
    age: Number,
    personal_score: {
        default: 0,
        type: Number
    },
    kudos_sent: {
        default: 0,
        type: Number
    },
    kudos_received: {
        default: 0,
        type: Number
    },
    user_picture: String,
});

module.exports = mongoose.model('User', UserSchema);