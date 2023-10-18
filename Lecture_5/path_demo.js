const path = require('path');

const fullPath = path.join(__dirname, 'path_demo.js');
const parentDir = path.normalize(__dirname+"/..");

console.log(fullPath);
console.log(parentDir);

console.log(path.basename(fullPath));
console.log(path.dirname(fullPath));
console.log(path.extname(fullPath));
console.log(path.delimiter);
console.log(path.sep);

const obj = path.parse(fullPath);
console.log(obj);

const path2 = path.format(obj);
console.log(path2);