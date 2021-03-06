let fs = require('fs')
let data = "菜鸟教程官网地址：www.runoob.com"

// 创建一个可以希尔的流，写入到文件output.txt中
let writerStream = fs.createWriteStream('output.txt')

// 使用utf8编码写入数据
writerStream.write(data, 'UTF8')

// 标记文件末尾
writerStream.end()

// 处理流事件--> data, end, and error
 writerStream.on('finish', () => {
   console.log('写入完成')
 })

 writerStream.on('error', err => {
   console.log(err.stack)
 })

 console.log('程序执行完毕')