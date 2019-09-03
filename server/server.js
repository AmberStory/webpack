const http = require('http');
const url = require('url');

function start(route, handle) {
  function onRequest(request, response) {
    const pathName = url.parse(request.url).pathname;
    response.writeHead(200, {'Content-Type': 'text/plain', 'Access-Control-Allow-Origin': '*'});
    const content = route(handle, pathName);
    response.write(content);
    response.end('end');
  }
  http.createServer(onRequest).listen(8800);
  console.log('server listen at 8800');
}



exports.start = start;