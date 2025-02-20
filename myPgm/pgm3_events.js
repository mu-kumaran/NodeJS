var events = require("events")
var ee = new events.EventEmitter()

ee.on("abi",()=>{
    console.log("Program end")
});

const myfunc = ()=>{
    console.log("event handled success");
    ee.emit("abi");
}

ee.on("studEvent",myfunc)
ee.emit("studEvent")


