
var stuff = require('./stuff'); //get all exports as an array

console.log(stuff.adder(5,6)) //get each values
console.log(stuff.adder(stuff.pi,5))
console.log(stuff.counter(['shaun', 'crystal', 'ryu']))


// console.log('hello world');

// setTimeout(function(){
//     console.log('3 seconds have passed');
// }, 3000);

// var time = 0;
// var timer = setInterval(function(){
//     time += 2
//     console.log(time + ' seconds have passed');
//     if(time > 5){
//         clearInterval(timer);
//     }
// }, 2000);

// console.log(__dirname);
// console.log(__filename);
