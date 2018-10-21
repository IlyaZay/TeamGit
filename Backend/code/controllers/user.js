const mongoose = require('mongoose');
const userModel = require('./../schemas/user');
const teamModel = require('../schemas/team');
const generateId = require('../scripts/id-generation');
positionModel = require('../schemas/position');

//Creating a new model
module.exports.addUser = ((req, res) => {
    console.log('POST user request');
    userModel.findOne({}, {}, { sort: { '_id' : -1 } }, ((err, post) => {
        if (err) {res.status(404)};
        let newUser = generateId.newId(req.body, post);
        teamModel.findOne({name: newUser.team_name}, {}, {}, ((err, team) => {
            if (err) {res.status(404)};
            if (!newUser.team_id){newUser.team_id = team.id};
            positionModel.findOne({title: newUser.position_name}, {}, {}, ((err, position) => {
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