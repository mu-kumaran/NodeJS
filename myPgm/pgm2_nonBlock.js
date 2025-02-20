var fs = require("fs")
fs.readFile("myFile.txt","utf-8",(err,data)=>{
    if(err) throw err
    else 
        console.log(data)
})
console.log("program end")