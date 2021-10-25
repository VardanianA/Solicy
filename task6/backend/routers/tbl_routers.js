const express = require('express');
const tbl_routers = express.Router();
const client = require("mongodb").MongoClient;
const connectionString = "mongodb://localhost:27017";


tbl_routers.get('/accounts/accounts', (req, res) => {
    (async () => {
        let connection = await client.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true });
        let db = connection.db("table");


        await db.collection('tbl').find().toArray((err, data) => {
            if (err) {
                res.json({ message: err.message });
            } else {
                res.json({ data })
            }
        })
    })().catch((error) => console.log(error));
})


module.exports = tbl_routers;


