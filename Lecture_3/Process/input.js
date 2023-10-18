// process.stdout.write("Hello Node JS");
// process.stdin.on('data', chunk => {
//     console.log(chunk.toString());
// })

const prompt = require('prompt-sync')();
let name = prompt('Enter your name ');
console.log(name);