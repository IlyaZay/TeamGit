const mongoose = require('mongoose');
const userModel = require('./../schemas/user');

//Creating a new model
module.exports.addUser = function(req, res){
    console.log('POST request');
    userModel.create(req.body)
    .then(function(user){
        res.send(user);
    })
};

//Requesting all users
module.exports.getUsers = function(req, res){
    console.log('GET request');
    userModel.find(req.params)
    .lean()
    .then(function(users){
        console.log(users)
        res.send(users)
    })
}

//Requesting a user by id
module.exports.getUserById = function(req, res){
    console.log('GETONE request');
    userModel.findById(req.params.id)
    .lean()
    .then(function(user){
        console.log(user)
        res.send(user);
    })
}