require('dotenv').config();
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const ObjectId = require('mongodb').ObjectId;


mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

//find data
router.get('/accounts', (req, res) => {
    (async () => {
        db.collection('tbl').find().toArray((err, data) => {
            if (err) {
                res.json({ message: err.message });
            } else {
                res.json({ data })
            }
        })
    })().catch((error) => console.log(error));
})

//edit 
router.get('/accounts/:id', (req, res) => {
    let id = req.params.id;
    (async () => {
        db.collection('tbl').findOne({ "_id": ObjectId(id) }, function (err, data) {
            if (err) {
                res.json({ message: err.message });
            } else {
                res.json({ data })
            }
        })
    })().catch((error) => console.log(error));
});

//delete
router.delete('/accounts/delete/:id', (req, res) => {
    let id = req.params.id;
    (async () => {
        db.collection('tbl').findOneAndDelete({ "_id": ObjectId(id) }, function (err, data) {
            if (err) {
                res.json({ message: err.message });
            } else {
                res.json({ data });
            }
        })
    })().catch((error) => console.log(error));
})

module.exports = router;