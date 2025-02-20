var ev = require("email-validator")
var email = "mu-kumaran1991@gmail.c";
if(ev.validate(email))
{
    console.log("valid email")
}
else{
    console.log("Invalid email")
}