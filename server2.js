var http = require('http');
var url = require('url');

function start () {
  function onRequest (req, res) {
    var pathname = url.parse(req.url).pathname;
    console.log('Request for' + pathname + 'received.');
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write('Hello world');
    res.end();
  }

  http.createServer(onRequest).listen(8888);
}
exports.start = start;