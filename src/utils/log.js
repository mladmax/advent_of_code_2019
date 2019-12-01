const colors = {
	yellow: '\x1b[33m%s\x1b[0m',
	green: '\x1b[32m%s\x1b[0m',
	red: '\x1b[31m%s\x1b[0m',
};

const createLog = () => {
	const info = (...args) => {
		console.log(colors.yellow, 'info:', ...args);
	};
	const success = (...args) => {
		console.log(colors.green, 'success:', ...args);
	};

	const error = (...args) => {
		console.log(colors.red, 'error:', ...args);
	};

	return Object.freeze({info, success, error});
};

module.exports = createLog;
