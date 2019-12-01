const axios = require('axios');
const auth = require('./auth');

const request = async options => {
	options.baseURL = 'https://adventofcode.com/2019';
	options.method = options.method || 'GET';
	options.headers = {...auth};

	const res = await axios(options);
	return res.data;
};

const get = (url, params) => request({method: 'GET', url, params});

module.exports = {
	get,
};
