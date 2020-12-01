var fs = require('fs');

//uses async, other codes will wait until it finishes reading file
var readMe = fs.readFileSync('readMe.txt', 'utf8');
console.log(readMe);

//write read file
fs.writeFileSync('writeMe.txt', readMe);

//no async, other codes will run while it's reading the file
fs.readFile('readMe.txt', 'utf8', function(err, data){
    console.log(data);
});

//to delete file
fs.unlink('writeMe.txt');


console.log('test');


// fs.readFile('readMe.txt', 'utf8', function(err, data){
//     fs.writeFile('writeMe.txt', data);
// });






