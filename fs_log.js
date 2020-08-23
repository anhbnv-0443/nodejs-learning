const fs = require('fs');

const debug = function (messsage) {
  fs.writeFileSync('nodejs.log', 'LOG DEBUG : ' + messsage + `\n`, { flag: 'a' });
}

const error = function (messsage) {
  fs.writeFileSync('nodejs.log', 'LOG ERROR : ' + messsage + `\n`, { flag: 'a' });
}

module.exports = {
	debug: debug,
	error: error,
};