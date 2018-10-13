var http = require('http');
var url = require('url');

http.createServer(function (req, res) {
    console.log(req.url);
    console.log(url.parse(req.url));

    res.writeHead(200,{
        'Content-type': 'text/plain; charset=utf-8'
    });
    var pathname = url.parse(req.url).pathname;
    if (pathname === '/user') {
        res.end('用户页面')
    }
    if (pathname === '/list') {
        res.end('文章列表')
    }
    if (pathname === '/detail') {
        res.end('文章详情')
    }

    res.end('hello')

}).listen(8080);

console.log('==========');


// user 用户页面
// get /user?id=12345
// get /user/12345
// list 文章列表
// get /list?hot=1
// detail 文章详情

// http://user:pass@sub.host.com:8080/p/a/t/h?query=string#hash

// javascript ECMAScript DOM BOM Event
// Node.js ECMAScript Event OS fs http