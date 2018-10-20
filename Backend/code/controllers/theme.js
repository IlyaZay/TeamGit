const mongoose = require('mongoose');
const themeModel = require('./../schemas/theme');

//Creating a new model
module.exports.addTheme = function(req, res){
    console.log('POST theme request');
    themeModel.create(req.body)
    .then(function(theme){
        res.send(theme);
    })
};

//Requesting all themes
module.exports.getThemes = function(req, res){
    console.log('GET theme request');
    themeModel.find(req.params)
    .lean()
    .then(function(themes){
        console.log(themes)
        res.send(themes)
    })
}

//Requesting a theme by id
module.exports.getThemeById = function(req, res){
    console.log('GETONE theme request');
    themeModel.findById(req.params.id)
    .lean()
    .then(function(theme){
        console.log(theme)
        res.send(theme);
    })
}