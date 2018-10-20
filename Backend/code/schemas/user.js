const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: String,
    department: String,
    teamRole: {
        type: String,
        enum: [
            'team_leader', 
            'junior_developer', 
            'senior_developer', 
            "middle_developer",
            'architect',
            'senior_architect',
            'analysist',
        ],
    },
    kudosSent: Number,
    kudosReceived: Number,
    rating: Number,
});

module.exports = mongoose.model('User', UserSchema);