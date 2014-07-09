function YUH(p){
	this.p = p;
	this.q = 'q';
}
YUH.prototype.weu = function(){console.log("weu-weu")};
YUH.prototype.trace = function(){console.trace()};
//module.exports = YUH;

var o = new YUH(10);
console.log(o);
o.weu();
//o.trace();
console.log(YUH.prototype);
console.log('-------------------------');

function Animal(name) {
  this.name = name;
};
Animal.prototype.move = function(meters) {
  console.log(this.name+" moved "+meters+"m.");
};

function Snake() {
  Animal.apply(this, Array.prototype.slice.call(arguments));
};
Snake.prototype = new Animal();
Snake.prototype.move = function(meters) {
  console.log("Slithering...");
  Animal.prototype.move.call(this, meters);
};

var sam = new Snake("Sammy the Python");
sam.move(5);
