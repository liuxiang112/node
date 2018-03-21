const events = require('events');
const emmitter = new events.EventEmitter();
emmitter.on('connection', function () {
  
})
emmitter.emit('error')