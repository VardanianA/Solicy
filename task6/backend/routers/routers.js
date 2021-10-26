const express = require('express');
const router = express.Router();
const ObjectId = require('mongodb').ObjectId;
const connectionString = "mongodb://localhost:27017";
const client = require("mongodb").MongoClient;


router.get('/accounts/accounts/:id', (req, res) => {
    let id = req.params.id;
    (async () => {
        let connection = await client.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true });
        let db = connection.db("table");

        db.collection('tbl').findOne({ "_id": ObjectId(id) }, function (err, data) {
            if (err) {
                res.json({ message: err.message });
            } else {
                res.json({ data })
            }
        })


    })().catch((error) => console.log(error));
})

module.exports = router;