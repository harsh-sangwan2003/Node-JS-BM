const fs = require('fs');
const path = require('path');

const bigFile = path.join(__dirname,"1.mkv");
const readStream = fs.createReadStream(bigFile,{highWaterMark:120000});

// readStream.on('open',()=>{

//     console.log("Stream open.");
// })

// readStream.on('data',(chunk)=>{

//     console.log(chunk);
//     readStream.destroy();
// })

// readStream.on('end',()=>{

//     console.log("No more data in stream.");
// })

// readStream.on('error',(err)=>{

//     console.log(err);
// })

// readStream.on('close',()=>{

//     console.log("Stream closed.");
// })

readStream.pipe(process.stdout);