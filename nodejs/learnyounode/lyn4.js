var mymodule = require("./mymodule.js");

mymodule(process.argv[2],process.argv[3],function(err,data){
  if(err !== null){console.log(err);return;}
  data.forEach(function(item){console.log(item)});
});
