var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;

const connection = (closure) => {
    return MongoClient.connect('mongodb://test:testuser1@ds247101.mlab.com:47101/mean-seed', (err,db) => {
        if(err){
            return console.log(err);
        }
        closure(db);
    });
}

let response = {
    status: 200,
    message: null,
    data: []
}

let sendError = (err, res) => {
    response.status = 501;
    response.message = typeof err == "object" ? err.message : err;
    res.status(501).json(response);
}

router.get('/students', (req, res) => {
    connection((client) => {
        client.db('mean-seed').collection('testcollection').find().toArray().then((students) => {
            response.data = students;
            res.json(response);
        })
    })
})

module.exports = router; 