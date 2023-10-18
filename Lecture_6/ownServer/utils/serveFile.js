const fs = require('fs');
const path = require('path');

function readStaticFiles(url, res) {

    const parentPath = path.normalize(__dirname + '/..');

    if (url === '/')
        url = '/index.html';

    else if (url === '/login')
        url = '/login.html';

    const fullPath = path.join(parentPath, "public", url);

    const stream = fs.createReadStream(fullPath);

    stream.pipe(res);

}

module.exports = readStaticFiles;