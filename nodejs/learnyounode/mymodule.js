fs = require("fs");
path = require("path");
module.exports = function(dir, ext, callback){
  var dc = fs.readdir(dir, function(err, dc){
    if(err !== null){
      return callback(err);
    }
    var data = [];
    for(var i=0;i<dc.length;i++){
      if(path.extname(dc[i]).substr(1)===ext){
        data.push(dc[i]);
      }
    }
    callback(err,data);
    return true;
  });
};
