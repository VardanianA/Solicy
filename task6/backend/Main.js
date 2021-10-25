require('dotenv').config();
const express = require("express");
const app = express();
const mongoose = require('mongoose');
const tbl_routers = require('./routers/tbl_routers');
const routers = require('./routers/routers');


mongoose.connect(process.env.DB_URI, {useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', (error) => console.log(error));
db.once('open', () => console.log(("Connected to the db")));


app.use("", require("./routers/tbl_routers"))
app.use('/accounts/accounts', tbl_routers);
app.use("", require("./routers/routers"))
app.use('/accounts/accounts:id', routers);


app.listen(3001, () => {
    console.log(`Server started at http://localhost:${3001}`);
})
