const combin2 = (from, to) => {
	const combinations = [];

	for (let x = from; x <= to; x++) {
		for (let y = from; y <= to; y++) {
			combinations.push([x, y]);
		}
	}

	return combinations;
};

module.exports = {
	combin2,
};
