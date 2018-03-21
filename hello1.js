function Hello () {
  var name;
  this.setName = function (thName) {
    name = thName;
  };
  this.sayHello = function () {
    console.log('Hello' + name);
  };
};

module.exports = Hello
