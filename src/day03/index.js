const log = require('../utils/log')();
const input = require('../utils/input');

const wires = require('./wires');

const day = __dirname.split('/').pop();

try {
	log.info(`Result of part 1 is ${wires.part1(input.get(day))}`);
	log.info(`Result of part 2 is ${wires.part2(input.get(day))}`);
} catch (error) {
	log.error(error);
}
