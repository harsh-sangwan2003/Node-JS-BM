// 1.
// module.exports = function(first,second){

//     return first+second;
// }

// 2.
// function add(first,second){

//     return first+second;
// }

// function sub(first,second){

//     return first-second;
// }

// function mul(first,second){

//     return first*second;
// }

// module.exports = {add,sub,mul};

// 3.
// console.log(module.exports);
// console.log(exports);
// console.log(module.exports===exports);

// module.exports = {
//     add(first,second){

//         return first+second;
//     },
    
//     sub(first,second){
    
//         return first-second;
//     },

//     mul(first,second){
    
//         return first*second;
//     },
// }

// 4.

exports = {
    add(first,second){

        return first+second;
    },
    
    sub(first,second){
    
        return first-second;
    },

    mul(first,second){
    
        return first*second;
    },
}

module.exports = exports;