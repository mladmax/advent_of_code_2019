const sequence = input => input.split(',').map((value, index) => (index === 1 ? 12 : index === 2 ? 2 : +value));

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
			case 1:
				sequence[result] = sequence[first] + sequence[second];
				break;
			case 2:
				sequence[result] = sequence[first] * sequence[second];
				break;
			case 99:
				return sequence;
			default:
				throw Error('Oops. Something went wrong!');
		}
	}
};

const run = input => compile(sequence(input), instructions([...sequence(input)]));

module.exports = {
	run,
};
