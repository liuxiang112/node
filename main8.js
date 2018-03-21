// 管道流
// 需求，把input里面的内容写到output里面去，但是main6的方法都是把文档里面的内容重置了，现在只想添加，要求保留原内容。可以设置写入流的追加参数来解决:


var fs = require('fs');
var data = '嘿';
var data2 = '我想笑';

 // 1.读取流
 // 创建可读流
var readStream = fs.createReadStream('input.txt');

 // 设置utf-8编码
 readStream.setEncoding('UTF8');

 // 处理流事件
 readStream.on('data', chunk => data += chunk);
 readStream.on('end', () => writeS(data));
//  readStream.on('end', () => console.log('hahhhshh', data));
 readStream.on('error', err => console.log(err.stack));

 console.log('程序1执行完毕');

 // 2.写入流
 // 创建可写流
 var writeS = dataS => {
   var writeStream = fs.createWriteStream('output.txt');

   // 使用utf-8写入流
   writeStream.write(data2+dataS, 'UTF8');

   // 标记文件末尾
   writeStream.end();
   writeStream.on('finish', () => console.log('写入完成'));
   writeStream.on('error', err => console.log(err.stack));
   
   console.log('程序2执行完毕');
 }