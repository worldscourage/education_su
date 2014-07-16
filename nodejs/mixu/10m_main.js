/*var http = require('http'),
    url = require('url');
var server = http.createServer().listen(8080, 'localhost');
server.on('request', function(req, res) {
  var url_parts = url.parse(req.url, true);
  switch(url_parts.pathname) {
    case '/':
    case '/index.html':
      res.write('<html><body>Hello!</body></html>');
      break;
    default:
      res.write('Unknown path: ' + JSON.stringify(url_parts));
  }
  res.end();
});*/

var http = require('http');
var options = {
    host: 'www.google.com',
    port: 80,
    path: '/'
  };
var req = http.get(options, function(response) {
  // handle the response
  var res_data = '';
  response.on('data', function(chunk) {
    res_data += chunk;
  });
  response.on('end', function() {
    console.log(res_data);
  });
});
req.on('error', function(e) {
  console.log("Got error: " + e.message);
});
