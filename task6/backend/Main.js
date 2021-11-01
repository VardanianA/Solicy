require('dotenv').config();
const express = require("express");
const mongoose = require('mongoose');
const routers = require('./routers/routers');
const app = express();

mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
module.exports = db = mongoose.connection;

db.on('error', (error) => console.log(error));
db.once('open', () => console.log(("Connected to the db")));

app.use("", require("./routers/routers"))
app.use('/accounts', routers);
app.use('/accounts/:id', routers);
app.use('/accounts/delete/:id', routers);

app.listen(3001, () => {
    console.log(`Server started at http://localhost:${3001}`);
})