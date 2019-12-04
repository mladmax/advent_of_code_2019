function part1(input) {
	const intersections = getAllIntersections(input);
	return shortestDistance(intersections);
}

function part2(input) {
	const intersections = getAllIntersections(input);
	return shortestStepCount(intersections);
}

function getAllIntersections(input) {
	const wires = input.split('\n');

	const instructions1 = wires[0].split(',');
	const instructions2 = wires[1].split(',');

	const points1 = getPoints(instructions1);
	const points2 = getPoints(instructions2);

	return getIntersections(points1, points2);
}

function getPoints(instructions) {
	let x = 0;
	let y = 0;
	let counter = 0;
	const points = [];
	instructions.forEach(instruction => {
		const steps = parseInt(instruction.substr(1), 10);
		switch (instruction.charAt(0)) {
			case 'D':
				for (let i = 0; i < steps; i++) {
					points.push({x: x, y: --y, steps: ++counter});
				}
				break;
			case 'U':
				for (let i = 0; i < steps; i++) {
					points.push({x: x, y: ++y, steps: ++counter});
				}
				break;
			case 'L':
				for (let i = 0; i < steps; i++) {
					points.push({x: --x, y: y, steps: ++counter});
				}
				break;
			case 'R':
				for (let i = 0; i < steps; i++) {
					points.push({x: ++x, y: y, steps: ++counter});
				}
				break;
		}
	});
	return points;
}

function getIntersections(points1, points2) {
	const intersections = [];

	points1.forEach(point => {
		points2.forEach(point2 => {
			if (point.x === point2.x && point.y === point2.y) {
				point.steps += point2.steps;
				intersections.push(point);
			}
		});
	});

	return intersections;
}

function shortestDistance(intersections) {
	let distance = getDistance(intersections[0]);
	intersections.forEach(point => {
		distance = Math.min(distance, getDistance(point));
	});
	return distance;
}

function getDistance(intersection) {
	const distanceX = intersection.x < 0 ? intersection.x * -1 : intersection.x;
	const distanceY = intersection.y < 0 ? intersection.y * -1 : intersection.y;

	return distanceX + distanceY;
}

function shortestStepCount(intersections) {
	let steps = intersections[0].steps;
	intersections.forEach(point => {
		steps = Math.min(steps, point.steps);
	});
	return steps;
}

module.exports = {
	part1,
	part2,
};
