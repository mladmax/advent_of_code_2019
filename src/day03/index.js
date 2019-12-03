const log = require('../utils/log')();
const input = require('../utils/input');

const day = __dirname.split('/').pop();

try {
	const wires = input.get(day).split('\n');

	const wire1Path = wires[0].split(',');
	const wire1 = {x: 0, y: 0};
	const wire1Points = [{x: 0, y: 0}];

	const wire2Path = wires[1].split(',');
	const wire2 = {x: 0, y: 0};
	const wire2Points = [{x: 0, y: 0}];

	wire1Path.forEach(path => {
		const direction = path.charAt(0);
		const move = +path.slice(1);

		switch (direction) {
			case 'U':
				wire1.y += move;
				wire1Points.push({x: wire1.x, y: wire1.y});
				break;
			case 'R':
				wire1.x += move;
				wire1Points.push({x: wire1.x, y: wire1.y});
				break;
			case 'D':
				wire1.y -= move;
				wire1Points.push({x: wire1.x, y: wire1.y});
				break;
			case 'L':
				wire1.x -= move;
				wire1Points.push({x: wire1.x, y: wire1.y});
				break;
		}
	});

	const wire1Lines = [];

	for (let i = 0; i < wire1Points.length; i++) {
		const first = wire1Points[i];
		const second = wire1Points[i + 1];
		if (!second) break;
		wire1Lines.push({first, second});
	}

	log.info(wire1Lines);

	wire2Path.forEach(path => {
		const direction = path.charAt(0);
		const move = +path.slice(1);

		switch (direction) {
			case 'U':
				wire2.y += move;
				wire2Points.push({x: wire2.x, y: wire2.y});
				break;
			case 'R':
				wire2.x += move;
				wire2Points.push({x: wire2.x, y: wire2.y});
				break;
			case 'D':
				wire2.y -= move;
				wire2Points.push({x: wire2.x, y: wire2.y});
				break;
			case 'L':
				wire2.x -= move;
				wire2Points.push({x: wire2.x, y: wire2.y});
				break;
		}
	});

	log.info(wire2Points);

	const wire2Lines = [];

	for (let i = 0; i < wire2Points.length; i++) {
		const first = wire2Points[i];
		const second = wire2Points[i + 1];
		if (!second) break;
		wire2Lines.push({first, second});
	}

	log.info(wire2Lines);

	wire1Lines.forEach(({first: x1, second: y1}) => {
		wire1Lines.forEach(({first: x2, second: y2}) => {
			if (x2.x > x1.x && x2.x < y1.x && y2.x > x1.x && y2.x < y1.x && x2.y < x1.y && x2.y < y1.y && y2.y > x1.y && y2.y > y1.y) {
				log.info(`Seku se na ${y1.x} i ${y1.y} i ${y2.x} i ${y2.y}`);
			}
		});
	});
} catch (error) {
	log.error(error.message);
}
