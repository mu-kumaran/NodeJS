var http = require("http");
http.createServer(function(req,res){
    res.write("Welcome to NodeJS server with Port number:1234")
    res.end()
}).listen(1234)
console.log("port:1234 listening")