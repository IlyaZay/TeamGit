const mongoose = require('mongoose');
const userModel = require('./../schemas/user');
const teamModel = require('../schemas/team');
const generateId = require('../scripts/id-generation');
const positionModel = require('../schemas/position');
const randomString = require('randomstring');

//Creating a new model
module.exports.addUser = ((req, res) => {
    console.log('POST user request');
    userModel.findOne({}, {}, { sort: { '_id' : -1 } }, ((err, post) => {
        console.log('POST: ' + post)
        if (err) {res.status(404)};
        if (!req.body.password) { req.body.password = randomString.generate({length: 8})};
        let newUser = generateId.newId(req.body, post);
        console.log({newUser})
        if (!newUser.team_name) {newUser.team_name = "undefined"};
        teamModel.findOne({name: newUser.team_name}, {}, {}, ((err, team) => {
            console.log('TEAM: ' + team)
            if (err) {res.status(404)};
            if (!newUser.team_id){newUser.team_id = team.id};
            positionModel.findOne({title: newUser.position_name}, {}, {}, ((err, position) => {
                console.log('POSITION ')
                console.log({position});
                if (err) {res.status(404)};
                if (!newUser.position_id){newUser.position_id = position.id};
                userModel.create(newUser)
                .then(function(user){
                    res.send(user);
                })
            }))
        }))
    }))
});

//Requesting all users
module.exports.getUsers = function(req, res){
    console.log('GET user request');
    userModel.find(req.params)
    .lean()
    .then(function(users){
        console.log(users)
        res.send(users)
    })
}

//Requesting a user by id
module.exports.getUserById = function(req, res){
    console.log('GETONE user request');
    userModel.findById(req.params.id)
    .lean()
    .then(function(user){
        console.log(user)
        res.send(user);
    })
}