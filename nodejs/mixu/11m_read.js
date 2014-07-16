var fs = require('fs');
/*var data = fs.readFileSync('./index.html', 'utf8');
// wait for the result, then use it
console.log(data);

/*var fs = require('fs');
fs.readFile('./test.txt', 'utf8', function(err, data) {
  // the data is passed to the callback in the second argument
  console.log(data);
});
console.log("Fuck the system!");*/
/*fs.writeFile('./results.txt', "Hello World\r\n", function(err) {
  if(err) throw err;
  console.log('File write completed');
});*/

fs.open('./result.txt', 'w', function(err, fd) {
  if(err) throw err;
  var buf = new Buffer('bbbbb\n');
  fs.write(fd, buf, 0, buf.length, null, function(err, written, buffer) {
    if(err) throw err;
    console.log(err, written, buffer);
    fs.close(fd, function() {
      console.log('Done');
    });
  });
});

  fs.open('./result.txt', 'r', function(err, fd) {
    if(err) throw err;
    var buf = new Buffer(3);
    fs.read(fd, buf, 0, buf.length, null, function(err, bytesRead, buffer) {
      if(err) throw err;
      console.log(err, bytesRead, buffer);
      fs.close(fd, function() {
        console.log('Done');
      });
    });
  });
console.log('--------------------');
var file = fs.createReadStream('./results.txt', {flags: 'r'} );
var out = fs.createWriteStream('./results2.txt', {flags: 'w'});
file.on('data', function(data) {
  console.log('data', data);
  out.write(data);
});
file.on('end', function() {
  console.log('end');
  out.end(function() {
    console.log('Finished writing to file');
    //test.done();
  });
});
