const checkForReaction = (x, y) => {
  if (x.toLowerCase() === y.toLowerCase()) {
    if (x !== y) {
      return true;
    };
  };
  return false;
}

const findUniqueUnits = (units) => {
  let uniques = new Set()
  for (let i = 0; i < units.length; i++) {
    uniques.add(units[i].toLowerCase());
  }

  return uniques;
}

const shortestPolymer = (input) => {
  let units = input.split('');
  let uniqueUnits = findUniqueUnits(units);

  let mutatedPolymers = [];

  uniqueUnits.forEach(uniqueUnit => {
    let mutation = units.filter(y => y.toLowerCase() !== uniqueUnit);
    let firstPosition = 0;
    let scanning = true;
  
    while (scanning) {  
      let reaction = checkForReaction(mutation[firstPosition], mutation[firstPosition + 1]);

      if (reaction) {
        mutation.splice(firstPosition, 2);
        firstPosition = 0;
      } else {
        firstPosition++;
  
        if (!mutation[firstPosition + 1]) {
          scanning = false;
        };
      };
  
      if (firstPosition >= mutation.length) {
        scanning = false;
      }
    };

    mutatedPolymers.push(mutation.length);
  });

  return mutatedPolymers.sort((x, y) => x - y)[0];
}

module.exports = shortestPolymer;