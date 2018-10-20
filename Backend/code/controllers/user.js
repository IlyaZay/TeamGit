const mongoose = require('mongoose');
const userModel = require('./../schemas/user');
const generateId = require('../scripts/id-generation');

//Creating a new model
module.exports.addUser = function(req, res){
    console.log('POST user request');
    userModel.findOne({}, {}, { sort: { '_id' : -1 } }, function(err, post) {
        if (err) {res.status(404)};
        let newUser = generateId.newId(req.body, post);
        userModel.create(newUser)
        .then(function(user){
            res.send(user);
        })
    })
};

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