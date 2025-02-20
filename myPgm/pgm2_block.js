var fs = require("fs");
var data = fs.readFileSync("myFile.txt",'utf-8');
console.log(data)
console.log("Program end")