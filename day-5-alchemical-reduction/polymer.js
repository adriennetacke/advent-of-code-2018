const checkForReaction = (x, y) => {
  if (x.toLowerCase() === y.toLowerCase()) {
    if (x !== y) {
      return true;
    };
  };
  return false;
}

const remainingPolymer = (input) => {
  let units = input.split('');

  let firstPosition = 0;
  let scanning = true;

  while (scanning) {  
    let reaction = checkForReaction(units[firstPosition], units[firstPosition + 1]);

    if (reaction) {
      units.splice(firstPosition, 2);
      firstPosition = 0;
    } else {
      firstPosition++;

      if (!units[firstPosition + 1]) {
        scanning = false;
      };
    };

    if (firstPosition >= units.length) {
      scanning = false;
    }
  }

  return units.length;
}

module.exports = remainingPolymer;