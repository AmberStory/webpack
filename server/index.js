const server = require('./server.js');
const router = require('./router'); 
const requestHandlers = require('./requestHandlers');

const handle = {};
handle['/start'] = requestHandlers.start;
handle['/upload'] = requestHandlers.upload;

server.start(router.route, handle);