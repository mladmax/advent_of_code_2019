function crack(input) {
	const range = input.split('-');
	const from = range[0];
	const to = range[1];

	const passwords = [];

	for (let password = from; password <= to; password++) {
		const digits = String(password).split('');

		const isSorted = digits.slice(1).every((item, i) => digits[i] <= item);

		const pairs = digits.slice(1).map((item, i) => digits.slice(i, i + 2));

		const dicitionary = {};

		pairs.forEach(pair => {
			const first = pair[0];
			const second = pair[1];

			if (first === second) {
				if (hasOwnProperty.call(dicitionary, first)) {
					dicitionary[first] = false;
				} else {
					dicitionary[first] = true;
				}
			}
		});

		const isValid = Object.keys(dicitionary).some(key => dicitionary[key]);

		if (isSorted && isValid) passwords.push(password);
	}

	return passwords;
}

module.exports = {
	crack,
};
