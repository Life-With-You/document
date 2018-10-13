var http = require('http');
var server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-type': 'text/plain; charset=utf8',
        'Access-Control-Allow-Origin': '*'
    })

    // https://m2.qiushibaike.com/article/list/text?page=1&count=30&readarticles=[121074263]
    // http://api.apiopen.top/recommendPoetry
    
    var options = {
        hostname: 'm2.qiushibaike.com',
        port: 80,
        path: '/article/list/text?page=9&count=30&readarticles=[121074263]',
        method: 'GET',
    };

    var request = http.request(options, function (response) {

        console.log(response.statusCode);
        response.setEncoding('utf8');

        var data = ''
        response.on('data', (chunk) => {
            // debugger
            console.log(chunk);
            // res.write(chunk)
            data += chunk
        });
        response.on('end', () => {
            console.log('响应中已无数据。');
            if (JSON.parse(data)) {
                res.write(data)
            }
            // console.log(typeof data)
            res.end()
        });
    })
    request.end();
}).listen(8080, () => {
    console.log('===============')
})