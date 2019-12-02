const log = require('../utils/log')();
const input = require('../utils/input');
const numbers = require('../utils/numbers');

const intcode = require('./intcode');

const day = __dirname.split('/').pop();

try {
	log.success(`Result of part one is ${intcode.run(input.get(day), 12, 2)[0]}`);

	numbers.combin2(0, 99).forEach(combination => {
		if (intcode.run(input.get(day), combination[0], combination[1])[0] === 19690720) {
			log.success(`Result of part two is ${100 * combination[0] + combination[1]}`);
		}
	});
} catch (error) {
	log.error(error.message);
}
