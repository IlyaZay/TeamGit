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
    userModel.find()
        .then(function(users){
            res.send(users)
    })
}