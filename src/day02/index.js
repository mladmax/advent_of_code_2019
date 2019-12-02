const log = require('../utils/log')();
const getInput = require('../utils/input');

const intcode = require('./intcode');

const day = __dirname.split('/').pop();

try {
	log.success(`Result of part one is ${intcode.run(getInput(day), 12, 2)[0]}`);

	for (let noun = 0; noun <= 99; noun++) {
		for (let verb = 0; verb <= 99; verb++) {
			if (intcode.run(getInput(day), noun, verb)[0] === 19690720) log.success(`Result of part two is ${100 * noun + verb}`);
		}
	}
} catch (error) {
	log.error(error.message);
}
