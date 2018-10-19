const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const app = express();
const User = require('./schemas/user.js');
const bodyParser = require('body-parser');
const addUser = require('./controllers/user.js');

 
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/CeltraHackathon')
    .then(() => console.log('MongoDB has started!'))
    .catch(e => console.log(e))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.listen(8080, function(){
    console.log('Now listening for requests...')
})

app.post('/users', addUser);
app.get('/users', function(err, res){
    if (err) return console.log(err);
    User.find();
    res.send(user);
    console.log('GET request');
    
})
