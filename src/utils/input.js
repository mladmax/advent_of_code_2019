const fs = require('fs');

const get = name => {
	return fs.readFileSync(`src/inputs/${name}.txt`, 'utf8');
};

module.exports = {
	get,
};
