var http = require("http")
var fs = require("fs");

http.createServer((req,res)=>{
    res.writeHead(200,{"content-type":"text/html"})
    fs.readFile("myFile.html","utf-8",(err,data)=>{
        if(err) throw err
        else
            {
                var output = data;
                console.log(output)
                res.write(output)
                res.end()
            }
    });
}).listen(1234)
console.log("Port listening at 1234")