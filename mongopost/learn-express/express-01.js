const express = require('express');
const app = express();
// POST的提交数据方式
const bodyParser = require('body-parser');
// 网页路径
const url = require('url')
app.use(bodyParser.urlencoded({
    extended: false
}));
// GET发送数据
app.get('/', (req, res) => {
    res.send('GET发送数据');
});
// POST发送数据
app.post('/', (req, res) => {
    // 获取网页路径，已对象的形式显示（ query: { name: 'nickli', age: '22' },）
    console.log(url.parse(req.url, true));

    // console.log(req.body);

    res.send('POST数据发送');
});
// 数据端口号
app.listen(8080, (err) => {
    console.log('数据读取结束');
});