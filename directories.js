var fs = require('fs');

//async make directory
fs.mkdirSync('stuff');

//async remove directory
fs.rmdirSync('stuff');

// fs.mkdir('stuff', function(){
//     fs.readFile('readMe.txt', 'utf8', function(err, data){
//         fs.writeFile('./stuff/writeMe.txt', data);
//     });
// });

fs.unlink('./stuff/writeMe.txt', function(){
    fs.rmdirSync('stuff');
});