/*
var http = require('http');
var port = process.env.port || 1337;
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World\n');
}).listen(port)
*/

var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send("Hello world from server.js");
})

app.listen(3000);
console.log("Server running on port 3000");