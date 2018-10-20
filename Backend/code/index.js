const mongoose = require('mongoose');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const UserController = require('./controllers/user.js');

 /**
  * Connecting to MONGO
  */
mongoose.connect('mongodb://localhost/CeltraHackathon')
    .then(() => console.log('MongoDB has started!'))
    .catch(e => console.log(e))
mongoose.Promise = global.Promise;
app.listen(8080, function(){
    console.log('Now listening for requests on port 8080')
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

/**
 * Users HTTP requests handling  
 */
app.post('/users', UserController.addUser);
app.get('/users', UserController.getUsers);
app.get('/users/:id', UserController.getUserById);
