var http = require('http');
// console.log(http);
http.createServer(function(request,response){
    // console.log(request);
    response.writeHead(200,{
        'Content-Type':'text/html;charset=utf-8'
    })
    // console.log(request);
    response.end('');
}).listen(8080)

var Hello = require('./exports');
var hello = new Hello();
hello.setName('bady');
hello.sayHello();
