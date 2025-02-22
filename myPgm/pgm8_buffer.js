// Buffer - inbuilt function - has alloc , allocUnsafe, from, write components 

var buf_alloc = new Buffer.alloc(20)
var buf_allocUnsafe = new Buffer.allocUnsafe(20)
var buf_from = Buffer.from("")

console.log("Buffer - Before writing")
console.log("Buffer - alloc :")
console.log(buf_alloc);
console.log("Buffer - allocUnsafe :")
console.log(buf_allocUnsafe);
console.log("Buffer - from :")
console.log(buf_from);


var len1 = buf_alloc.write("Manoj Kumar")
var len2 = buf_allocUnsafe.write("Manoj Kumar")
var len3 = buf_from = Buffer.from("Manoj Kumar")

console.log("Buffer - After writing")
console.log("Buffer - alloc :")
console.log(buf_alloc);
console.log(buf_alloc.toString());
console.log("total chars:"+ len1)
console.log("Buffer - allocUnsafe :")
console.log(buf_allocUnsafe);
console.log(buf_allocUnsafe.toString());
console.log("total chars:"+ len2)
console.log("Buffer - from :")
console.log(buf_from);
console.log(buf_from.toString());
console.log("total chars:"+ len3)

//Buffer extraction
for(k of buf_from.toString()){
    console.log(k+ " ")
}