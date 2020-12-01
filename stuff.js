var counter = function(arr){
    return 'There are ' + arr.length + ' elements in this array';
};

var adder = function(a,b){
    return  `The sum of the 2 numbers is ${a+b}`
};

var pi = 3.142; //or module.exports.pi = 3.142

//to be required on app.js. export one by one
// module.exports.counter = counter;
// module.exports.adder = adder;
// module.exports.pi = pi;

//exports all together
module.exports = {    
    counter: counter,
    adder: adder,
    pi: pi
};


