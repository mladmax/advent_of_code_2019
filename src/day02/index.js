const log = require('../utils/log')();
const input = require('../utils/input');
const numbers = require('../utils/numbers');

const intcode = require('./intcode');

const day = __dirname.split('/').pop();

try {
	const code = input.get(day);

	log.success(`Result of part one is ${intcode.run(code, 12, 2)[0]}`);

	numbers.combin2(0, 99).forEach(([noun, verb]) => {
		if (intcode.run(code, noun, verb)[0] === 19690720) {
			log.success(`Result of part two is ${100 * noun + verb}`);
		}
	});
} catch (error) {
	log.error(error.message);
}
