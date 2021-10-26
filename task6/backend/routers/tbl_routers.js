const express = require('express');
const table_router = express.Router();
const client = require("mongodb").MongoClient;
const connectionString = "mongodb://localhost:27017";


table_router.get('/accounts', (req, res) => {
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


module.exports = table_router;