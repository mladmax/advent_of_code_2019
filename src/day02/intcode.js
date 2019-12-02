const log = require('../utils/log')();

const runOperations = sequence => {
	for (let index = 0; index < sequence.length; index += 4) {
		const operation = sequence[index];

		const pos1 = sequence[index + 1];
		const pos2 = sequence[index + 2];
		const pos3 = sequence[index + 3];

		switch (operation) {
			case 1:
				sequence[pos3] = sequence[pos1] + sequence[pos2];
				break;
			case 2:
				sequence[pos3] = sequence[pos1] * sequence[pos2];
				break;
			case 99:
				return sequence;
			default:
				throw Error('Oops. Something went wrong!');
		}
	}
};

const runIntcode = opcode => {
	const sequence = opcode.split(',').map(n => +n);

	sequence[1] = 12;
	sequence[2] = 2;

	return runOperations(sequence)[0];
};

module.exports = runIntcode;
