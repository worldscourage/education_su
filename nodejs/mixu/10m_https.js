// HTTPS
var fs = require("fs");
var https = require('https');
// read in the private key and certificate
var pk = fs.readFileSync('./privatekey.pem');
var pc = fs.readFileSync('./certificate.pem');
var opts = { key: pk, cert: pc };
// create the secure server
var port = process.env.PORT || 443;
var serv = https.createServer(opts, function(req, res) {
  console.log(req);
  res.end();
});
// listen on port 443
serv.listen(port, '0.0.0.0');
damn it won't work!!!
