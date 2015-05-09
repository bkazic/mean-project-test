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

/*
app.get('/', function (req, res) {
    res.send("Hello world from server.js");
})
*/

app.use(express.static(__dirname + "/public"));

app.get('/contactlist', function (req, res) {
    console.log("I recieved a get request");

    person1 = {
        name: 'Tim',
        email: 'test@email.com',
        number: '13221321'
    };
    
    person2 = {
        name: 'Liam',
        email: 'neason@taken2.com',
        number: '(777) 777-7777'
    };
    
    person3 = {
        name: 'Jessie',
        email: 'jessie@vma.com',
        number: '(684) 426-1232'
    };
    
    var contactlist = [person1, person2, person3];
    res.json(contactlist);
});

app.listen(3000);
console.log("Server running on port 3000");