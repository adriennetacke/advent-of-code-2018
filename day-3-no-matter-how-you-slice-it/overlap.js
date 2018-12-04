const overlap = (input) => {
  let claims = input.split('\n').map(x => x.trim());
  let grid = {};

  for (let a = 0; a < claims.length; a++) {
    let item = claims[a];
    let matchGroups = item.match(/#(\d+) @ (\d+),(\d+): (\d+)x(\d+)/);

    let offsetX = parseInt(matchGroups[2]);
    let offsetY = parseInt(matchGroups[3]);
  
    let width = parseInt(matchGroups[4]);
    let height = parseInt(matchGroups[5]);
  
    
    for (let i = 0; i < width; i++) {
      let x = offsetX + i;

      for (let j = 0; j < height; j++) {
        let y = offsetY + j;

        grid[`${x},${y}`] = (grid[`${x},${y}`] !== undefined) ? grid[`${x},${y}`] + 1 : 1; 
      }
    }
  }

  let overlappedSpots = Object.values(grid);

  return overlappedSpots.filter(spot => spot >= 2).length;
}

module.exports = overlap;