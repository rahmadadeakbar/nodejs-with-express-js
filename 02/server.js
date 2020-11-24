var http = require('http');
var route = require('./route');

http.createServer(route.handleRequest).listen(3000);