const express = require('express');
const router = express.Router();
// 引入数据库链接
const Todo = require('../lib/mongoose')
// 使用GET
router.get('/', (req, res) => {
    console.log(req.body);

    Todo.find((err, restult) => {
        // console.log(restult);
        // 模板渲染
        res.render('index', {
            items: restult
        });
    })

});
// POST
router.post('/', (req, res) => {
    console.log(req.body);
    if (req.body.item) {
        Todo.create({

        }, (err) => {
            if (err) {
                return console.log(err);
            }
            console.log('数据成功写入');
        })
    }

    // res.send('这是post');
    res.redirect('/');
});
// 导出路由(router)
module.exports = router;