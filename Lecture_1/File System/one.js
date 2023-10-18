const fs = require('fs');
const path = "C:/Users/hsang.000/Desktop/Harsh/Pepcoding/Web Dev/Web-Dev YT/Mern Stack BM/Node JS BM/Node Modules/File System/sample.txt";


var a = 100;
var b = 200;
var c = a+b;

fs.readFile(path,(err,data)=>{
    console.log(data.toString());
})

console.log(c);