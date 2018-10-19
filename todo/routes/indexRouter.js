var express = require('express');
var router = express.Router();
// 导入Todo这个数据模型
var Todo = require('../lib/mongoose').Todo;

// GET 首页
router.get('/', (req, res) => {
    // res.send('value');
    Todo.find((err, restult) => {
        console.log(restult);
        // 使用 模板引擎渲染
        res.render('index', {
            items: restult
        });
    })
});

// POST 首页     
router.post('/', (req, res) => {
    // 判断POST提交的数据不为空
    if (req.body.item) {
        Todo.create({
            content: req.body.item
        }, (err) => {
            if (err) {
                return console.log(err)
            }
            console.log('写入成功')
        })
    }
    // 重定向到首页
    res.redirect('/');
});
// module导出
module.exports = router;