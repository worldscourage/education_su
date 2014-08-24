var fs = require("fs");
var Path = require("path");
var path=process.argv[2];
var ext=process.argv[3];
fs.readdir(path, function(err, list){
  for(var i=0; i<list.length; i++){
    if(Path.extname(list[i]).substr(1)==ext)
      console.log(list[i]);
  }
});
