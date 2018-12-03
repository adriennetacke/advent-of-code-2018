const checkDifference = (x, y) => {
  let totalDifferences = 0;

  for (let a = 0; a < x.length; a++) {
    let letter = x[a];
    let secondLetter = y[a];

    if (letter !== secondLetter) {
      totalDifferences++;
    }
  };

  return totalDifferences;
};

const findCommonLetters = (x, y) => {
  let commonLetters = [];

  for (let i = 0; i < x.length; i++) {
    let letter = x[i];
    let comparisonLetter = y[i];

    if(letter === comparisonLetter) {
      commonLetters.push(letter);
    }
  }

  return commonLetters;
};

const checksumTwo = (input) => {
  let rows = input
    .split('\n')
    .map(x => x.trim());
  
  for (let i = 0; i < rows.length; i++) {
    for (let j = 0; j < rows.length; j++) {
      if(checkDifference(rows[i], rows[j]) === 1) {
        return findCommonLetters(rows[i], rows[j]).join('');
      }
    }
  }
}

module.exports = checksumTwo;