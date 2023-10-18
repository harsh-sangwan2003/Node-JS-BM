const zlib = require('zlib');
const fs = require('fs');
const path = require('path');

const bigFile = path.join(__dirname, "1.mkv");
const zipFile = path.join(__dirname, "a.gz");
fs.createReadStream(bigFile)
    .pipe(zlib.createGzip())
    .pipe(fs.createWriteStream(zipFile))
