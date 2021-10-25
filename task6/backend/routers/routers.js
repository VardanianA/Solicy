const express = require('express');
const router = express.Router();
const client = require("mongodb").MongoClient;
const mongo = require("mongodb")
const connectionString = "mongodb://localhost:27017";



router.get('/accounts/accounts/:id', (req, res) => {
    let id = req.params.id;
    (async () => {
        let connection = await client.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true });
        let db = connection.db("table");


        await db.collection('tbl').findOne({ "_id": mongo.ObjectId(id) }, function (err, data) {
            if (err) {
                res.json({ message: err.message });
            } else {
                res.json({ data })
            }
        })


    })().catch((error) => console.log(error));
})

module.exports = router;