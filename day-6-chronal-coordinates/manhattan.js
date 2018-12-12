const findManhattanDistance = (xOne, yOne, xTwo, yTwo) => {
  return Math.abs(xOne - xTwo) + Math.abs(yOne - yTwo);
}

const findSpecialCoordinate = (coordinateSet, coordinate, type) => {
  let coordinates = [];

  for (let i = 0; i < coordinateSet.length; i++) {
    let coordinatePair = coordinateSet[i];
    let matchGroups = coordinatePair.match(/(\d+), (\d+)/);

    if (coordinate === 'x') {
      let xCoordinate =  matchGroups[1];
      coordinates.push(parseInt(xCoordinate));
    } else {
      let yCoordinate =  matchGroups[2];
      coordinates.push(parseInt(yCoordinate));
    }
  };

  if (type === "max") {
    return coordinates.sort((a, b) => b - a)[0];
  }

  return coordinates.sort((a, b) => a - b)[0];
}

const findLargestArea = (input) => {
  let coordinates = input.split('\n').map(x => x.trim());

  let maxXCoordinate = findSpecialCoordinate(coordinates, 'x', 'max');
  let maxYCoordinate = findSpecialCoordinate(coordinates, 'y', 'max');
  let minXCoordinate = findSpecialCoordinate(coordinates, 'x', 'min');
  let minYCoordinate = findSpecialCoordinate(coordinates, 'y', 'min');

  let areas = {};

  for (let i = 0; i < coordinates.length; i++) {
    areas[coordinates[i]] = [];
  }

  for (let y = 0; y <= maxYCoordinate; y++) {
    for (let x = 0; x <= maxXCoordinate; x++) {

      let distances = [];

      for (let c = 0; c < coordinates.length; c++) {

        let coordinatePair = coordinates[c];
        let matchGroups = coordinatePair.match(/(\d+), (\d+)/);

        distances.push({ coordinate: coordinates[c], distance: findManhattanDistance(x, y, matchGroups[1], matchGroups[2])});
      }

      distances.sort((a, b) => a.distance - b.distance);

      if (distances[0].distance < distances[1].distance) {
        areas[distances[0].coordinate].push(`${x}, ${y}`);
      }
    }
  }

  return Object
    .keys(areas)
    .filter(key => {
      let coordinates = areas[key];

      return coordinates.every(point => {
        let matchGroups = point.match(/(\d+), (\d+)/);

        let xCoordinate = parseInt(matchGroups[1]);
        let yCoordinate = parseInt(matchGroups[2]);

        let validX = xCoordinate < maxXCoordinate && xCoordinate > minXCoordinate;
        let validY = yCoordinate < maxYCoordinate && yCoordinate > minYCoordinate;

        return validX && validY;
      });
    })
    .map(key => areas[key].length)
    .sort((a, b) => b - a)[0];
}

module.exports = findLargestArea;