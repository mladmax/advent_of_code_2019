const OPERATIONS = {
	ADD: 1,
	MULT: 2,
	EXIT: 99,
};

const sequence = (input, noun, verb) => input.split(',').map((value, index) => (index === 1 ? noun : index === 2 ? verb : +value));

const instructions = sequence => {
	const instructions = [];
	while (sequence.length) {
		instructions.push(sequence.splice(0, 4));
	}
	return instructions;
};

const compile = (sequence, instructions) => {
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
			case OPERATIONS.EXIT:
				return sequence;
			default:
				throw Error('Oops. Something went wrong!');
		}
	}
};

const run = (input, noun, verb) => compile(sequence(input, noun, verb), instructions(sequence(input, noun, verb)));

module.exports = {
	run,
};
