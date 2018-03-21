const events = require('events');
const eventEmitter = new events.EventEmitter();

// 监听器 #1
let listener1 = () => {
  console.log('监听器 listener1 执行');
}

// 监听器 #2
let listener2 = () => {
  console.log('监听器 listener2 执行');
}
// 绑定connection 事件，处理函数为listener1
eventEmitter.addListener('connection', listener1)

// 绑定connection事件，处理函数为listener2
eventEmitter.addListener('connection', listener2)

let eventListeners = require('events').EventEmitter.listenerCount(eventEmitter, 'connection')
console.log(eventListeners + "个监听器监听连接事件")

// 触发connection事件
eventEmitter.emit('connection')

eventEmitter.removeListener('connection', listener1);

let eventListeners1 = require('events').EventEmitter.listenerCount(eventEmitter, 'connection')
console.log(eventListeners1 + "个监听器监听连接事件1")