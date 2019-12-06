const OPERATIONS = {
	ADD: 1,
	MULT: 2,
	STDIN: 3,
	STDOUT: 4,
	EXIT: 99,
};

const sequence = (code, noun, verb) => code.split(',').map((value, index) => (index === 1 ? noun : index === 2 ? verb : +value));

const bytes = code => code.split(',').map(value => +value);

const instructions = sequence => {
	const instructions = [];

	while (sequence.length) {
		switch (sequence[0]) {
			case OPERATIONS.STDIN:
			case OPERATIONS.STDOUT:
				instructions.push(sequence.splice(0, 2));
			default:
				instructions.push(sequence.splice(0, 4));
		}
	}
	return instructions;
};

const compile = (sequence, instructions, input) => {
	for (let instruction of instructions) {
		const operation = instruction[0];
		const first = instruction[1];
		const second = instruction[2];
		const result = instruction[3];

		switch (operation) {
			case OPERATIONS.ADD:
				sequence[result] = sequence[first] + sequence[second];
				break;
			case OPERATIONS.MULT:
				sequence[result] = sequence[first] * sequence[second];
				break;
			case OPERATIONS.STDIN:
				sequence[first] = input;
				break;
			case OPERATIONS.STDOUT:
				return sequence[first];
			case OPERATIONS.EXIT:
				return sequence;
			default:
				throw Error('Oops. Something went wrong!');
		}
	}
};

// day02
const run = (code, noun, verb) => compile(sequence(code, noun, verb), instructions(sequence(code, noun, verb)));

// day05
const test = (code, input) => compile(bytes(code), instructions(bytes(code)), input);

module.exports = {
	run,
	test,
};
