const positionModel = require('./../schemas/position');
const generateId = require('../scripts/id-generation');

//Creating a new model
module.exports.addPosition = function(req, res){
    console.log('POST position request');
    positionModel.findOne({}, {}, { sort: { '_id' : -1 } }, ((err, post) => {
        if (err) {res.status(404)};
        let newPosition = generateId.newId(req.body, post);
        positionModel.create(newPosition)
        .then(function(position){
            res.send(position);
        })
    }));
};

//Requesting all positions
module.exports.getPositions = function(req, res){
    console.log('GET position request');
    positionModel.find(req.params)
    .lean()
    .then(function(positions){
        console.log(positions)
        res.send(positions)
    })
}

//Requesting a position by id
module.exports.getPositionById = function(req, res){
    console.log('GETONE position request');
    positionModel.findById(req.params.id)
    .lean()
    .then(function(position){
        console.log(position)
        res.send(position);
    })
}