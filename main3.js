let events = require('events')
let eventEmitter = new events.EventEmitter()

// 监听器 #1
let listener1 = function listener1 () {
  console.log('监听器listener1执行')
}

// 监听器 #2
let listener2 = function listener2 () {
  console.log('监听器listener2执行')
}

// 绑定connection事件，处理函数为listener1
eventEmitter.addListener('connection', listener1)
// 绑定connection事件，处理函数为listener2
eventEmitter.addListener('connection', listener2)

let eventListeners = require('events').EventEmitter.listenerCount(eventEmitter, 'connection')
console.log(eventListeners + '个监听器监听连接事件')

// 处理connection事件
eventEmitter.emit('connection')

// 移除监绑定的listener1函数
eventEmitter.removeListener('connection', listener1)

// 触发连接事件
eventEmitter.emit('connection')

eventListeners = require('events').EventEmitter.listenerCount(eventEmitter, 'connection')
console.log(eventListeners + '个监听器监听连接事件')
console.log('程序执行完毕')
