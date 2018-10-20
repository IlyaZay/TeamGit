const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const ThemeSchema = new Schema({
    id: Number,
    topic: String,
    value: Number
});

module.exports = mongoose.model('Theme', ThemeSchema);