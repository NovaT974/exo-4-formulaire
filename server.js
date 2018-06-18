var express = require('express'),
    server = express();
var bodyParser = require('body-parser');
//var messages = [];

server.use(express.static("static"));

server.use(bodyParser.urlencoded({extended:true}));

server.get("/",function(req, res){
    res.sendFile(__dirname +"/index.html");
});

// server.get("/",function(req, res){
//     console.log(req.body);
//     messages.push({email: req.body.email, message: req.body.message});
//     //res.sendFile(__dirname +"/index.html");
// });


server.post("/addition",function(req, res){
    //console.log(req.body);
    var nb1 = parseInt(req.body.nb1);
    console.log(nb1)
    var nb2 = parseInt(req.body.nb2);
    console.log(nb2)
    var total = nb1 + nb2;
    console.log(total);
    // console.log(total);
    //res.send("{"+total+"}");
    //res.writeHead(200);
    // res.setHeader('Content-Type', 'application/json');
    // res.send(JSON.stringify({ resultat: total }));
    res.send(''+total);
    // messages.push({email: req.body.email, message: req.body.message});
    //res.sendFile(__dirname +"/index.html");

   
});


server.listen(3105);    