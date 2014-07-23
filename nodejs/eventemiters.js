var events = require("events");

var EventEmitter = require("events").EventEmitter;
 
var ee = new EventEmitter();
ee.on("someEvent", function () {
    console.log("event has occured");
});
ee.setMaxListeners(4);
ee.on("someEvent", function () { console.log("event 1"); });
ee.on("someEvent", function () { console.log("event 2"); });
ee.on("someEvent", function () { console.log("event 3"); });
ee.on("someEvent", function () { console.log("event 4"); });
ee.on("someEvent", function () { console.log("event 5"); });
 
ee.emit("someEvent");
