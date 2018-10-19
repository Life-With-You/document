var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/todo-express-mongoose', (err) => {
    if (err) {
        console.log('数据库连接失败')
    } else {
        console.log('数据库连接成功')
    }
})

// Schema
var todoSchema = new mongoose.Schema({
    content: String,
    isFinished: {
        type: Boolean,
        default: false
    }
    // type 类型
    // default 默认值
});


// Model
var Todo = mongoose.model('Todo', todoSchema);

// // document
// var item = new Todo({
//     content: 'xxxxxxxxxxx'
// })

// item.save();

exports.Todo = Todo;