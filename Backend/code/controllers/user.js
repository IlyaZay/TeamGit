const mongoose = require('mongoose');
const userModel = require('./../schemas/user');

//Creating a new model
userModel.create(() => function(req, res){
    var user = new User();
    user.name = req.body.name;
    user.save(function(err){
        if (err) return console.log(err);
        console.log(user + ' saved')
        res.send(user);
    })
    console.log('POST request')
});