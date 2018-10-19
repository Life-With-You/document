var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/todo-express-mongoose', (err) => {
    if (err) {
        console.log('数据库链接失败');
    } else {
        console.log('数据库链接成功');
    }
})

// 设置schema
// var todoSchema = new mongoose.Schema({
//     content: String,
//     isFinished: {
//         type: Boolean,
//         default: false
//     }
//     // type 类型；
//     // isFinished 默认值
// })
// // 设置 Model
// var Todo = mongoose.model('Todo', todoSchema);

// // var item = new Todo({
// //     content: "xxxxxxxxxxxx"
// // })
// // item.save();

// exports.Todo = Todo;