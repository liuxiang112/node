// 管道流

const fs = require('fs');

// 创建一个可读流
const readStream = fs.createReadStream('input.txt');

// 创建一个可写流
// 设置第二个参数append
const writeStream = fs.createWriteStream('output.txt');

// 管道读写操作
// 读取input.txt文件内容，并将内容写入output.txt文件中
readStream.pipe(writeStream);