const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const app = express();
const User = require('./schemas/user.js');
const bodyParser = require('body-parser');
const UserController = require('./controllers/user.js');

 //connect to mongo
mongoose.connect('mongodb://localhost/CeltraHackathon')
    .then(() => console.log('MongoDB has started!'))
    .catch(e => console.log(e))
mongoose.Promise = global.Promise;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.listen(8080, function(){
    console.log('Now listening for requests...')
})

app.post('/users', UserController.addUser);
app.get('/users', function(err, res){
    if (err) return console.log(err);
    User.find();
    res.status(201).send(user);
    console.log('GET request');
    
})
