const calibrateDuplicates = (input) => {
  let breakdown = input
    .split('\n')
    .map(x => parseInt(x.trim(), 10));
  
  let currentFrequency = 0, i = 0;
  let duplicateFound = false;
  let pastFrequencies = [currentFrequency];

  while(!duplicateFound) {
    
    if (i === breakdown.length) { i = 0; };
    
    currentFrequency += breakdown[i];
    
    duplicateFound = pastFrequencies.includes(currentFrequency);
    
    pastFrequencies.push(currentFrequency);
    
    i++;
  }

  return currentFrequency;
};

module.exports = calibrateDuplicates;