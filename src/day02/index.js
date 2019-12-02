const log = require('../utils/log')();
const getInput = require('../utils/input');

const intcode = require('./intcode');

const day = __dirname.split('/').pop();

try {
	log.success(`The result is ${intcode.run(getInput(day))[0]}`);
} catch (error) {
	log.error(error.message);
}
