let EventEmitter = require('events').EventEmitter;
let event = new EventEmitter()
event.on('some_event', () => {
  console.log('some_event 事件触发')
})
setTimeout(() => {
  event.emit('some_event')
}, 1000)