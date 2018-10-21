const mongoose = require('mongoose');
const themeModel = require('./../schemas/theme');
const generateId = require('../scripts/id-generation');

//Creating a new model
module.exports.addTheme = function(req, res){
    console.log('POST theme request');
    themeModel.findOne({}, {}, { sort: { '_id' : -1 } }, function(err, post) {
        if (err) {res.status(404)};
        let newTheme = generateId.newId(req.body, post);
        themeModel.create(newTheme)
        .then(function(theme){
            res.send(theme);
        })
    });
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