var http = require("http");
var url = process.argv[2];
var bl = require('bl');
var bufer = "";

http.get(url, function (response) {
  response.pipe(bl(function (err, data) {
    if (err)
      return console.error(err);
    data = data.toString();
    console.log(data.length);
    console.log(data);
  }));  
});