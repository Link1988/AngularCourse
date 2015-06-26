/*
var http = require('http');

http.createServer(function(req, res) {
	res.writeHead(200, { 'Content-Type': 'text/plain' });
	res.end("Hello World");	
}).listen(8000, '127.0.0.1');
*/

var restify = require('restify');
var server = restify.createServer();

server.get(/.*/, restify.serveStatic({
	'directory': './client/',
	'default': 'index.html'	
}));

server.listen(8000, function() {
	console.info("Server Running at port 8000");	
});