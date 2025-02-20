var http = require("http")
var fs = require("fs")
var url = require("url")

http.createServer((req,res)=>{
    var pathname = url.parse(req.url).href;   //.pathname //.path //.href 
    console.log(pathname.substring(1));

    //Writing in browser
    res.writeHead(200,{"content-type":"text/html"})
    path = pathname.substring(1)
    fs.readFile(path,"utf-8",(err,data)=>{
        res.write(data)
        res.end()
    });
    
}).listen(1234)

console.log("Port listening at :1234")