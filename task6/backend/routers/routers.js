require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const ObjectId = require('mongodb').ObjectId;

//find data
router.get('/accounts', (req, res) => {
    db.collection('tbl').find().toArray((err, data) => {
        if (err) {
            res.json({ message: err.message });
        } else {
            res.json({ data })
        }
    })
})

//edit 
router.get('/accounts/:id', (req, res) => {
    let id = req.params.id;
    db.collection('tbl').findOne({ "_id": ObjectId(id) }, function (err, data) {
        if (err) {
            res.json({ message: err.message });
        } else {
            res.json({ data })
        }
    })
});

//delete
router.delete('/accounts/delete/:id', (req, res) => {
    let id = req.params.id;
    db.collection('tbl').findOneAndDelete({ "_id": ObjectId(id) }, function (err, data) {
        if (err) {
            res.json({ message: err.message });
        } else {
            res.json({ data });
        }
    })
})

module.exports = router;