const mongoose = require('mongoose');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const UserController = require('./controllers/user.js');
const ThemeController = require('./controllers/theme.js');
const TeamController = require('./controllers/team.js');
const PositionController = require('./controllers/position.js');
const KudoController = require('./controllers/kudo.js');

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

//HTTP requests routing
app.post('/users', UserController.addUser);
app.get('/users', UserController.getUsers);
app.get('/users/:id', UserController.getUserById);
app.post('/themes', ThemeController.addTheme);
app.get('/themes', ThemeController.getThemes);
app.get('/themes/:id', ThemeController.getThemeById);
app.post('/teams', TeamController.addTeam);
app.get('/teams', TeamController.getTeams);
app.get('/teams/:id', TeamController.getTeamById);
app.post('/positions', PositionController.addPosition);
app.get('/positions', PositionController.getPositions);
app.get('/positions/:id', PositionController.getPositionById);
app.post('/kudos', KudoController.addKudo);
app.get('/kudos', KudoController.getKudos);
app.get('/kudos/:id', KudoController.getKudoById);

