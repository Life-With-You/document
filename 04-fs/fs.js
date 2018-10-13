// var fs = require("fs");

// var data = fs.readFileSync('./input.txt');
// console.log(data.toString())

// fs.readFile('./input.txt', function (err, data) {
//     console.log(data.toString())
// })

// fs.open('./input.txt', 'r+', function (err, fd) {
//     console.log(fd)
// })

// fs.stat('./input.txt', function (err, stat) {
//     console.log(stat)
// })

// 覆盖写入
// fs.writeFile("./input.txt", "xxxxxxxxxx", function (err) {
//   console.log("完成");
// });

// 追加写入 flag: a+ 表示追加模式  \n 表示换行\t表示缩进
// fs.writeFile("./input.txt", "\n\tvvvvvvvvvvvvv", {
//   flag: 'a+'
// }, function (err) {
//   console.log("完成");
// });

// fs.mkdir('test', (err) => {
//   console.log("完成");
// })

// fs.writeFile("./output.txt", "xxxxxxxxxx", function (err) {
//   console.log("完成");
// });
var path = require('path');
console.log(__dirname);
console.log(path.join(__dirname, 'test'));


// console.log("=============");