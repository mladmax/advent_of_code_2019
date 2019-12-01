const getInputURL = () => {
	const date = new Date();
	return `day/${date.getDate()}/input`;
};

module.exports = getInputURL;
