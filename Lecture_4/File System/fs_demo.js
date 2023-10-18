const fs = require('fs');

// Async Version
fs.readFile(__filename, { encoding: 'utf-8' }, (err, data) => {

    if (err)
        console.log(err);

    else
        console.log(data.toString());
})

// Sync version
try {

    let content = fs.readFileSync(__filename);
    console.log(content.toString());
    console.log("################");

} catch (err) {

    console.log(err);
}