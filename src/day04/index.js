const log = require('../utils/log')();
const input = require('../utils/input');

const password = require('./password');

const day = __dirname.split('/').pop();

try {
	log.success(`There are ${password.crack(input.get(day)).length} passwords that match the criteria`);
} catch (error) {
	log.error(error);
}
