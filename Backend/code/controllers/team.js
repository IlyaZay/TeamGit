const mongoose = require('mongoose');
const teamModel = require('./../schemas/team');
const generateId = require('../scripts/id-generation');

//Creating a new model
module.exports.addTeam = function(req, res){
    console.log('POST team request');
    teamModel.findOne({}, {}, { sort: { '_id' : -1 } }, function(err, post) {
        if (err) {res.status(404)};
        let newTeam = generateId.newId(req.body, post);
        teamModel.create(newTeam)
        .then(function(team){
            res.send(team);
        })
    });
};

//Requesting all teams
module.exports.getTeams = function(req, res){
    console.log('GET team request');
    teamModel.find(req.params)
    .lean()
    .then(function(teams){
        console.log(teams)
        res.send(teams)
    })
}

//Requesting a team by id
module.exports.getTeamById = function(req, res){
    console.log('GETONE team request');
    teamModel.findById(req.params.id)
    .lean()
    .then(function(team){
        console.log(team)
        res.send(team);
    })
}