var express = require('express'),
    server = express();

    var messages = [];

server.use(express.static(__dirname));

server.listen(8081);    