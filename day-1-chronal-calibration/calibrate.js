const calibrate = (input) => {
  let breakdown = input
    .split('\n')
    .map(x => parseInt(x.trim(), 10));
  let total = 0;

  for (let i = 0; i < breakdown.length; i++) {
    total += breakdown[i];
  }

  return total;
}

module.exports = calibrate;