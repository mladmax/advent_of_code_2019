const log = require('../utils/log')();
const getInput = require('../utils/input');

const intcode = require('./intcode');

const day = __dirname.split('/').pop();

try {
	log.success(`Result of part one is ${intcode.run(getInput(day), 12, 2)[0]}`);
} catch (error) {
	log.error(error.message);
}
