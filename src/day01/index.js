const log = require('../utils/log')();
const input = require('../utils/input');

const FuelCounterUpper = require('./FuelCounterUpper');

const day = __dirname.split('/').pop();

try {
	const fuelCounterUpper = new FuelCounterUpper();

	log.info('loading modules');
	const modules = input.get(day);
	log.success('modules loaded');

	log.info('calculating fuel requirments');
	const fuelRequired = fuelCounterUpper.getFuel(modules);
	log.success(`the amount of fuel required is ${fuelRequired}`);

	log.info('calculating actual fuel requirments');
	const actualFuelRequired = fuelCounterUpper.getActualFuel(modules);
	log.success(`the amount of the actual fuel required is ${actualFuelRequired}`);
} catch (error) {
	log.error(error);
}
