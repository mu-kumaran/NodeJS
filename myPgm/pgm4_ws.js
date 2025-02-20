var fs = require("fs");
var writeStream = fs.createWriteStream("newFile.txt")

var  yourTxt = `
Hello, 
I am Manoj Kumar, 
I come from Karur
`;

writeStream.write(yourTxt,'utf-8')
writeStream.end()

writeStream.on("finish",()=>{
    console.log("Your text written successfully")
});

writeStream.on("error",(err)=>{
    console.log("Error: "+err.stack)
});

console.log("Program end")
