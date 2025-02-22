var buf = new Buffer.alloc(20);
buf.write("Manoj Kumar")

console.log("Before string insertion")
console.log(buf.toString())

//Buffer overwriting
buf.write("muthu",8)

console.log("After inserting 'muthu' at 8th position")
console.log(buf.toString())