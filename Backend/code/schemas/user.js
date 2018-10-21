const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const UserSchema = new Schema({
    id: Number,
    first_name: {
        type: String,
        required: true,
    },
    //sent
    last_name:{
        type: String,
        required: true,
    },
    //sent
    email: {
        type: String,
        required: true,
    },
    manager_id: String,
    team_name: {
        type: String,
        required: true
    },
    team_id: Number,
    position_name: {
        type: String,
        required: true
    },
    position_id: String,
    //sent
    sex: String,
    //sent
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
    password: String
});

module.exports = mongoose.model('User', UserSchema);