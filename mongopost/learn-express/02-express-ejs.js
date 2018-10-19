// 快捷方式 e4exp
const express = require('express');
const ejs = require('ejs');
const app = express();
// 设置模板引擎目录
app.set('views', './views');
// 设置使用哪一个引擎模板
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index', {
        value: {
            title: "标题",
            content: "内容"
        },
        students: [{
            name: "culki",
            age: 18
        }, {
            name: "culki01",
            age: 99
        }]
    })
    // res.send('Hello World!');
});

app.post('/', (req, res) => {
    res.send('林');
    console.log(req.body);
});
app.listen(8080, () => {
    console.log('Example app listening on port 8080!');
});