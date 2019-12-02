const fs = require('fs');

const getInput = name => {
	return fs.readFileSync(`src/inputs/${name}.txt`, 'utf8');
};

module.exports = getInput;
