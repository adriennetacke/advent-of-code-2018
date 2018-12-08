const findManhattanDistance = (xOne, yOne, xTwo, yTwo) => {
  return Math.abs(xOne - xTwo) + Math.abs(yOne - yTwo);
}

const findMaxCoordinate = (coordinateSet, coordinate) => {
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

  return coordinates.sort((a, b) => b - a)[0];
}

const findLargestArea = (input) => {
  let coordinates = input.split('\n').map(x => x.trim());

  let maxXCoordinate = findMaxCoordinate(coordinates, 'x');
  let maxYCoordinate = findMaxCoordinate(coordinates, 'y');

  let grid = [[0]];

  for (let i = 0; i < coordinates.length; i++) {
    let coordinatePair = coordinates[i];
    let matchGroups = coordinatePair.match(/(\d+), (\d+)/);

    let xCoordinate =  matchGroups[1];
    let yCoordinate =  matchGroups[2];

    console.log(xCoordinate, yCoordinate);

    if (grid[xCoordinate] == undefined) {
      grid[xCoordinate] = [];
    };

    grid[xCoordinate][yCoordinate] = 'X';
  };

  for (let i = 0; i < maxXCoordinate; i++) {
    let currentXCoordinate = i;
    for (let j = 0; j < maxYCoordinate; j++) {
      let currentYCoordinate = j;

      if (grid[i][j] === 'X') {
        continue;
      }

      for (let c = 0; c < coordinates.length; c++) {
        let coordinatePair = coordinates[c];
        let matchGroups = coordinatePair.match(/(\d+), (\d+)/);
    
        let xCoordinate =  matchGroups[1];
        let yCoordinate =  matchGroups[2];

        console.log("xone", i, "yone", j, "xtwo", xCoordinate, "ytwo", yCoordinate);
        let distance = findManhattanDistance(i, j, xCoordinate, yCoordinate);
        console.log('distance', distance);
      }

      // grid[i][j]
    }
  }

}

module.exports = findLargestArea;