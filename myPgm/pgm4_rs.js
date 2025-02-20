var fs = require("fs");
var ans = "";
var readStream = fs.createReadStream("myfile.txt");
readStream.setEncoding("utf-8");

readStream.on("data",(chunk)=>{
    ans += chunk;
});

readStream.on("end",()=>{
    console.log("file data:"+ ans)
});

readStream.on("error",(err)=>{
    console.log("error: "+err.stack)
});
