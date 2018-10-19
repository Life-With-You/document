var express = require('express');
var router = express.Router();
// 导入Todo这个数据模型
var Todo = require('../lib/mongoose').Todo

router.get('/:itemId', (req, res) => {
    // console.log(req.params.itemId);
    var itemId = req.params.itemId;
    // 先查找ID 原来的值
    Todo.findById(itemId, (err, result) => {
        // 通过id修改 反转原来的值
        Todo.findByIdAndUpdate(itemId, {
            isFinished: !result.isFinished
        }, (err1, result1) => {
            if (err1) {
                console.log(err1);
            }
        })
    })
    res.redirect('/');
});


module.exports = router;