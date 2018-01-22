var express = require('express');
var path = require('path');
var ip = require('ip');

var server = express();

var __PORT = 8080;

server
.use(express.static(path.join(__dirname, '..')))
.get('/', function(req, res) {
    return res.sendFile(path.join(__dirname, 'index.html'));
})
.listen(__PORT, function() {
    var l = 'Server Running http://$ip:$port'
        .replace(/\$ip/, ip.address())
        .replace(/\$port/, __PORT);
    console.log(l);
})