var port = 8081;
const express = require('express')
var bodyParser = require("body-parser")
var app = express()
const fs = require("fs");
var cors = require('cors');
var routes = require('./Routes/routes');
app.use(cors())
app.use(bodyParser.json({limit:"10mb"}));
app.use(bodyParser.urlencoded({limit:"10mb", extended:true, parameterLimit:500}));
app.use('/',routes);
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.listen(port,() => {
    console.log("Backend Server Started at",port,"\n");
})