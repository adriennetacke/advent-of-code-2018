const checksum = (input) => {
  let rows = input.split('\n');
  let totalTwos = 0;
  let totalThrees = 0;

  rows.forEach((item, i) => {
    let tally = {};
    let currentBox = item.split('');

    for (let i = 0; i < currentBox.length; i++) {
      let char = currentBox[i];
      
      tally[char] = (tally[char] !== undefined) ? tally[char] + 1 : 1;
    }

    let tallies = new Set(Object.values(tally));

    if (tallies.has(2)) {
      totalTwos++;
    }; 
    
    if (tallies.has(3)) {
      totalThrees++;
    };
  });

  return totalTwos * totalThrees;
}

module.exports = checksum;