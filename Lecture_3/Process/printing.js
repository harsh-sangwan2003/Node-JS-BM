const util = require('util');

var myName = "Brain Mentors";
console.log("My name is %s", myName);

var result = util.format('My name is %s', myName);
console.log(result);

const obj = {
    name: 'Amit',
    courses: {
        sections: {
            content: {
                text: "JavaScript",
                format: {
                    webFormat: {
                        json: {
                            a: 10,
                            b: 20
                        }
                    }
                }
            }
        }
    }
}

console.dir(obj,{depth:7});
console.log(util.inspect(obj,{depth:7}));