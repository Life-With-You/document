var express = require("express");
var app = express();
var bodyParser = require('body-parser');

// 引入路由
var indexRouter = require("./routes/indexRouter");
var deleteRouter = require("./routes/deleteRouter");
var editRouter = require("./routes/editRouter");
var toggerRouter = require("./routes/toggerRouter");

// 静态文件托管
app.use(express.static("public"));

// 设置模板引擎
app.set("views", "./views");
app.set("view engine", "ejs");


// 使用bodyParser 解析POST请求
app.use(bodyParser.urlencoded({
    extended: false
}));
// 使用首页路由
app.use("/", indexRouter);
// 使用delete路由
app.use("/delete", deleteRouter);
// 使用 edit路由
app.use("/edit", editRouter);
// 使用 togger路由
app.use("/togger", toggerRouter);
app.listen(8080, () => {
    console.log("App listening on port 8080!");
});