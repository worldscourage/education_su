var net = require("net");
var filePath = __dirname + "/logs.json";
var file = require("fs").createWriteStream(filePath, {flags:"a"});
var JSONStream = require("json-stream");
var es = require("event-stream");

var source = es.mapSync(function(d){return d});

var stringifier = es.mapSync(function(data){
	return JSON.stringify(data)+"\n";
});

source
	.pipe(stringifier)
	.pipe(file, {end:false});

var server = net.createServer();

server.on("connection",function(socket){
	var jsonstream = new JSONStream();
	socket.
		pipe(jsonstream).
		pipe(source, {end:false});
});

server.listen(4000);

module.exports = source;
