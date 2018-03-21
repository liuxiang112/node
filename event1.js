// events 模块只提供了一个对象： events.EventEmitter。EventEmitter 的核心就是事件触发与事件监听器功能的封装。
// 你可以通过require("events");来访问该模块。


// EventEmitter 的每个事件由一个事件名和若干个参数组成，事件名是一个字符串，通常表达一定的语义。对于每个事件，EventEmitter 支持 若干个事件监听器。
// 当事件触发时，注册到这个事件的事件监听器被依次调用，事件参数作为回调函数参数传递。
// 让我们以下面的例子解释这个过程：

const events = require('events');
const emitter = new events.EventEmitter();

emitter.on('someEvents', (arg1, arg2) => {
  console.log('listener1', arg1, arg2);
});
emitter.on('someEvents', (arg1, arg2) => {
  console.log('listener2', arg1, arg2);
});

emitter.emit('someEvents', '参数1', '参数2');



// 以上例子中，emitter 为事件 someEvents 注册了两个事件监听器，然后触发了 someEvents 事件。
// 运行结果中可以看到两个事件监听器回调函数被先后调用。 这就是EventEmitter最简单的用法。
// EventEmitter 提供了多个属性，如 on 和 emit。on 函数用于绑定事件函数，emit 属性用于触发一个事件。接下来我们来具体看下 EventEmitter 的属性介绍。