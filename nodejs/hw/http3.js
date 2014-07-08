var http = require("http"),
	url = require("url"),
	fs = require("fs");
 
var server = http.createServer(function (request, response) {
    // Attach listener on end event.
    //request.on('end', function () {
	fs.readFile("test.txt", 'utf-8', function(error,data){
        	response.writeHead(200, {
        	    'Content-Type': 'text/plain'
        	});
		data = parseInt(data)+1;
		fs.writeFile("test.txt", data);
        	// Send data and end response.
        	response.end('This page was refreshed '+data+' times');
	})
    //});
// Listen on the 8080 port.
});

console.log('server listening 8000 port');
server.listen(8000);

