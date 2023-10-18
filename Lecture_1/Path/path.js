const path = require('path');
const fs = require('fs');

const file1 = path.join(__dirname, "one.txt");
const file2 = path.join(__dirname, "two.txt");

fs.readFile(file1, (err, data) => {
    console.log(data.toString());
});

fs.readFile(file2, (err, data) => {
    console.log(data.toString());
})