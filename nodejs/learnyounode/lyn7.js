var http = require("http");
//var url = process.argv[2];
var bl = require('bl');
var gets = [];
var count = 0;
var urlcnt = 3;

function output(){
	for(var i=0; i<gets.length; i++){
		console.log(gets[i]);
	}
}

function getDataFromUrl(url, i){
	http.get(url, function (response) {
	  response.pipe(bl(function (err, data) {
		if (err)
		  return console.error(err);
		data = data.toString();
		gets[i]=data;
		if(++count == urlcnt)
			output();
	  }));  
	});
}

for(var i=0;i<urlcnt;i++){
	getDataFromUrl(process.argv[2+i],i);
}