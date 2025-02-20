var http = require("http")
var fs = require("fs")
var url = require("url")

http.createServer((req,res)=>{
    var pathname = req.url;
    console.log(pathname.substring(1));
    res.write("Hello everyone")
    res.end()
}).listen(1234)

console.log("Port listening at :1234")