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
   if(req.url === '/home' || req.url === '/'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        var myReadStream = fs.createReadStream(__dirname + '/index.html', 'utf8');
        myReadStream.pipe(res);

   }else if(req.url === '/contact'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        var myReadStream = fs.createReadStream(__dirname + '/contact.html', 'utf8');
        myReadStream.pipe(res);

   }else if(req.url === '/api/ninjas'){
       var ninjas = [{name: 'Demartechx', age: 27}, {name: 'Martechx', age: 25}];
       res.writeHead(200, {'Content-Type': 'text/json'});
        res.end(JSON.stringify(ninjas));

   }else{
        res.writeHead(200, {'Content-Type': 'text/html'});
        var myReadStream = fs.createReadStream(__dirname + '/404.html', 'utf8');
        myReadStream.pipe(res);
   }

});

server.listen(3000, '127.0.0.1'); // port and IP address
console.log('Now listening to port 3000')