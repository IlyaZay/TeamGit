const mongoose = require('mongoose');
const kudoModel = require('./../schemas/kudo');

//Creating a new model
module.exports.addKudo = function(req, res){
    console.log('POST kudo request');
    kudoModel.create(req.body)
    .then(function(kudo){
        res.send(kudo);
    })
};

//Requesting all kudos
module.exports.getKudos = function(req, res){
    console.log('GET kudo request');
    kudoModel.find(req.params)
    .lean()
    .then(function(kudos){
        console.log(kudos)
        res.send(kudos)
    })
}

//Requesting a kudo by id
module.exports.getKudoById = function(req, res){
    console.log('GETONE kudo request');
    kudoModel.findById(req.params.id)
    .lean()
    .then(function(kudo){
        console.log(kudo)
        res.send(kudo);
    })
}