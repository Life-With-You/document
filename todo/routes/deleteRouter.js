var express = require('express');
var router = express.Router();
// 导入Todo这个数据模型
var Todo = require('../lib/mongoose').Todo

// GET 根据id来删除数据
router.get('/:itemId', (req, res) => {

    var itemId = req.params.itemId;
    Todo.findByIdAndDelete(itemId, (err) => {
        console.log('删除成功')
    });
    res.redirect('/');
});


module.exports = router;