// const fn = require('./calc.js');
const { add, sub, mul } = require('./calc.js');

// let res = fn(1, 2);
let res1 = add(1, 2);
let res2 = sub(2, 1);
let res3 = mul(1, 2);

console.log(res1);
console.log(res2);
console.log(res3);