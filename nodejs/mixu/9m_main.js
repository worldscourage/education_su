//var iid;
//setTimeout(function(){console.log("Oh, yeah, baby!");clearInterval(iid)},2005);
//iid = setInterval(function(){console.log("Rustam loh");},500);
//console.log("For NORAN!!!!!", iid);
/*
var EventEmitter = require('events').EventEmitter;
var util = require('util');
// create the class
var MyClass = function () { this.a = "a"; this.b="b"; }
// augment the prototype using util.inherits
util.inherits(MyClass, EventEmitter);
MyClass.prototype.whatever = function() { this.emit('someevent', 'Hello', 'World'); }

var obj = new MyClass();
obj.on('someevent', function(arg1) { console.log('someevent happiend') });

obj.whatever();
*/
var fs = require('fs');
var file = fs.createReadStream('./test.txt');
file.on('error', function(err) {
  console.log('Error '+err);
  throw err;
});
file.on('data', function(data) {
  console.log('Data', data.length);
});
file.on('end', function(){
  console.log('Finished reading all of the data');
});

var fs = require('fs');

var file = fs.createWriteStream('./out.txt');

process.stdin.on('data', function(data) {
  file.write(data);
});
process.stdin.on('end', function() {
  file.end();
});
process.stdin.resume(); // stdin in paused by default
