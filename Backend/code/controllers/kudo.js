const mongoose = require('mongoose');
const kudoModel = require('./../schemas/kudo');
const generateId = require('../scripts/id-generation');
const moment = require('moment');
const themeModel = require('../schemas/theme');
const userModel = require('../schemas/user');

//Creating a new model
module.exports.addKudo = function(req, res){
    console.log('POST kudo request');
    userModel.findOne({first_name: req.body.sender_first_name, last_name: req.body.sender_last_name})
    .then(((sender) => {
        if (sender) {console.log({sender});
        sender.kudos_sent++;
        userModel.updateOne({first_name: sender.first_name, last_name: sender.last_name}, {$set: {kudos_sent: sender.kudos_sent}}, {}, ((err) => {
            if (err) {res.status(500)};
            kudoModel.findOne({}, {}, { sort: { '_id' : -1 } }, ((err, post) => {
                if (err) {res.status(404)};
                let newKudo = generateId.newId(req.body, post);
                if (!newKudo.sender_id) {newKudo.sender_id = sender.id;};
                if (!newKudo.theme_name) {newKudo.theme_name = rndTheme(3)};
                console.log(rndTheme());
                console.log({newKudo});
                themeModel.findOne({topic: newKudo.theme_name}, {}, {}, ((err, theme) => {
                    if (err) {res.status(404)};
                    if (!newKudo.theme_id){newKudo.theme_id = theme.id};
                    if (!newKudo.complexity){newKudo.complexity = theme.value};
                    if (!newKudo.date) {newKudo.date = moment().format('YYYY-MM-DD HH:MM:ss')};
                    userModel.findOne({first_name: req.body.receiver_first_name, last_name: req.body.receiver_last_name})
                    .then(((receiver) => {
                        receiver.kudos_received++;
                        receiver.personal_score += theme.value;
                        newKudo.receiver_id = receiver.id;
                        userModel.updateOne({first_name: receiver.first_name, last_name: receiver.last_name}, {$set:{kudos_received: receiver.kudos_received, personal_score: receiver.personal_score}}, {}, ((err) => {
                            if (err) {res.status(500)};
                            kudoModel.create(newKudo)
                            .then(function(kudo){
                                res.send(kudo);
                            });
                        }))
                    }))
                }))
            }))
        }))
    } else {res.send("SENDER doesn't exist")}}))
}

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

const rndTheme = function(a) {
    var themes = ['managerial tasks', 'knowledge input', 'knowledge sharing', 'favor'];
    var item = themes[Math.floor(Math.random()*themes.length)];
    return item;
}