// 管道流
// 需求，把input里面的内容写到output里面去，但是main6的方法都是把文档里面的内容重置了，现在只想添加，要求保留原内容。可以设置写入流的追加参数来解决:


const fs = require('fs');

// 创建一个可读流
const readStream = fs.createReadStream('input.txt');

// 创建一个可写流
// 设置第二个参数append
const writeStream = fs.createWriteStream('output.txt', { 'flags': 'a' });

// 管道读写操作
// 读取input.txt文件内容，并将内容写入output.txt文件中
readStream.pipe(writeStream);