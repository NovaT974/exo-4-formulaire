var express = require('express'),
    server = express();
var bodyParser = require('body-parser');
var messages = [];

server.use(express.static(__dirname));

server.use(bodyParser.urlencoded({extended:false}));

server.get("/",function(req, res){
    res.sendFile(__dirname +"/index.html");
});

server.post("/",function(req, res){
    console.log(req.body);
});

server.listen(3002);    