const log = require('./fs_log'); 

const app = require('http');
const hostname = '127.0.0.1';
const port = 3000;

const server = app.createServer((request, response) => {
	response.status = 200;
	response.setHeader('Content-Type', 'text/plain');
	response.end('First App !');
	log.error('Run fist app');
});

server.listen(port, hostname, () => {
	 console.log(`Server running at http://${hostname}:${port}/`);
	 log.debug('Run fist app');
})