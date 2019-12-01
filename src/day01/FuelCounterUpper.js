const http = require('../utils/http');

function FuelCounterUpper() {
	const calculateFuel = mass => Math.floor(+mass / 3 - 2);

	const sum = (accumulated, current) => accumulated + current;

	const noNegative = mass => Math.max(+mass, 0);

	const calculateActualFuel = mass => +mass && calculateActualFuel(noNegative(calculateFuel(mass))) + noNegative(calculateFuel(mass));

	this.loadModules = modulesURL => http.get(modulesURL);

	this.getFuel = modules =>
		modules
			.split('\n')
			.map(calculateFuel)
			.reduce(sum, 0);

	this.getActualFuel = modules =>
		modules
			.split('\n')
			.map(calculateActualFuel)
			.reduce(sum, 0);
}

module.exports = FuelCounterUpper;
