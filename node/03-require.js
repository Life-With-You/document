var http = require('http');
// console.log(http);

var sevent = http.createServer(function (request,response) {
    response.writeHead(200,{
        'Content-type':'text/html;charset=utf-8'
    });
    var options = {
        //网站
        //https://www.apishop.net/#/api/detail/?productID=93
        //http://api.apiopen.top/recommendPoetry
        hostname:'api.apiopen.top',
        post:80,
        //网址
        path:'/recommendPoetry',
        //请求方式
        method:'GET'
    };
    var raw = '';
    var req = http.request(options,(res) => {
        // console.log(`状态码：${res.statusCode}`);
        // console.log(`响应头：${JSON.stringify(res.headers)}`);
        res.setEncoding('utf8');
        res.on('data',(chunk) =>{
            // console.log(`响应主体：${chunk}`);
            console.log(chunk.toString());
            raw += chunk.toString();
            // console.log(raw);
            response.write(raw);
            response.end('=====')
        });
        res.on('end',()=>{
            console.log('响应中已无数据。');
        })
    });
    req.end();

}).listen(8080);
//supervisor