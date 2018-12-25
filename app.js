const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
var bodyParser = require('body-parser');
const mongoose = require("mongoose");
const db = require("./DBconnect");
const usr = require("./models/user")

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/user/add',(req, res, next) => {
    var user = new usr();
    user.name = req.body.name;
    user.email = req.body.email;
    user.save(function(err){
        if(err){
            throw err;
        }else {
            res.send("data sent successful")
        }
    })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`));