var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mongotest', (err) => {
    console.log('数据链接成功');
});
// 构造一个Schema
var kittySchema = mongoose.modal('kittySchema', {
    name: String,
    age: Number,
    sex: String
})