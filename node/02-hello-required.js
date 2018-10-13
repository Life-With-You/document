/*
//函数
function say(word) {
    console.log(word);
}
function execute(sayFunction,value) {
    sayFunction(value);
}
execute(say,'hello');
*/
/*
//匿名函数
function execute(sayFunction,value) {
    sayFunction(value);
}
execute(function (word) {
    console.log(word);
},'hello');
*/
/*
//匿名函数定义服务器
var http = require('http');
http.createServer(function (req,res) {
    res.writeHead(200,{
        'Content-Type':'text/html;charset=utf-8'
    });
    res.end('这是一个测试')
}).listen(8080);
*/
/*
//原生函数定义的服务器
var http = require('http');
function say (req,res) {
    res.writeHead(200,{
        'Content-Type':'text/html;charset=utf-8'
    });
    res.end('这是一个测试')
}
var en = http.createServer(say);
en.listen(8080);*/
