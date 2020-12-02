var fs = require('fs')
var http = require('http');

/*
//read and write files using pipe
var myReadStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf8');
var myWriteStream = fs.createWriteStream(__dirname + '/writeMe.txt');

myReadStream.pipe(myWriteStream);
*/

//send read file to server
var server =  http.createServer(function(req, res){
    console.log('request was made: ' + req.url)
    
    // //for file plain text
    // res.writeHead(200, {'Content-Type': 'text/plain'});
    // var myReadStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf8');
    // myReadStream.pipe(res);
    
    // //for html file
    // res.writeHead(200, {'Content-Type': 'text/html'});
    // var myReadStream = fs.createReadStream(__dirname + '/index.html', 'utf8');
    // myReadStream.pipe(res);

    //for json data
    res.writeHead(200, {'Content-Type': 'text/json'});
    var myObj = {
        name: 'Demartechx',
        job: 'software developer',
        age: 29
    };
    res.end(JSON.stringify(myObj));

});

server.listen(3000, '127.0.0.1'); // port and IP address
console.log('Now listening to port 3000')