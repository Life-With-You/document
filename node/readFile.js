var fs = require('fs');
/*
//同步，按顺序开始执行
var data = fs.readFileSync('us.txt');
console.log(data.toString());
console.log('++++++++++++++++++');
var yi = fs.readFileSync('su.txt');
console.log(yi.toString());
*/
//异步，先执行可执行的，后执行需要等待的（根据文件的大小来决定优先）
fs.readFile('su.txt', function (err, data) {
    if (err) return console.error(err);
    // console.log(data.toString());
    console.log('su');
});
fs.readFile('us.txt', function (err, data) {
    if (err) return console.error(err);
    // console.log(data.toString());
    console.log('us');
});
