const fs = require('fs');
const path = __dirname;

fs.readdir(path, (err, folders) => {

    if (err)
        console.log(err);

    else
        console.log(folders);
})

fs.writeFile('test.txt', "Hello Node JS.", (err) => {

    if (err)
        console.log(err);
})

fs.appendFile("test.txt", " This is the new data.", err => {

    if (err)
        console.log(err);
})

fs.copyFile("test.txt", "test2.txt", (err) => {

    if (err)
        console.log(err);
})

let isExist = fs.existsSync("test.txt");
console.log(isExist);

fs.unlink("test.txt", err => {

    if (err)
        console.log(err);
})

try {

    fs.mkdirSync("temp");
    fs.rmdirSync("temp");

} catch (err) {

    console.log(err);
}