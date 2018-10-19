var express = require('express');
var router = express.Router();
// 导入Todo这个数据模型
var Todo = require('../lib/mongoose').Todo
// 访问GET时
router.get('/', (req, res) => {
    res.send('edit GET');
});
// 根据id获取数据与更改
router.post('/:itemId', (req, res) => {
    // console.log(req.body)
    // console.log(req.params.itemId)
    var itemId = req.params.itemId
    // 获取更改的数据，并添加
    Todo.findByIdAndUpdate(itemId, {
        content: req.body.item
    }, (err) => {
        console.log('更改成功')
        res.redirect('/');
    })
});


module.exports = router;