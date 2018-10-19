const express = require('express');
const app = express();
// var bodyParser = require('body-parser');
// 引入首页路由
// var indexRouter = require('./routes/indexRouter')

// 静态文件托管
app.use(express.static('public'));
// 设置模板引擎
app.set('views', './views');
app.set('view engine', 'ejs');

// 解析POST请求
// app.use(bodyParser.urlencoded({
//     extended: false
// }));

// 使用路由
// app.use("/", indexRouter);


app.listen(8080, () => {
    console.log('Example app listening on port 8080!');
});