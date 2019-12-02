const log = require('../utils/log')();
const getInput = require('../utils/input');

const runIntcode = require('./intcode');

const input = __dirname.split('/').pop();

try {
	const opcode = getInput(input);
	const res = runIntcode(opcode);
	log.info(res);
} catch (error) {
	log.error(error);
}
