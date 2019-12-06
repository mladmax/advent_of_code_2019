const log = require('../utils/log')();
const input = require('../utils/input');
const intcode = require('../day02/intcode');

const day = __dirname.split('\\').pop();

try {
	const code = input.get(day);
	log.info(intcode.test(code, 1));
} catch (error) {
	log.error(error);
}
