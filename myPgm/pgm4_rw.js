var fs = require("fs")
var rs = fs.createReadStream("myFile.html")
var ws = fs.createWriteStream("newFile.html")
rs.pipe(ws)
console.log("file transferred")