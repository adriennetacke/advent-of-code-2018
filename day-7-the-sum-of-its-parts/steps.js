const steps = (input) => {
  let steps = input.split('\n');

  let finalOrder = [];

  for (let i = 0; i < steps.length; i++) {
    let step = steps[i];
    let matchGroups = step.match(/(\w+) (.) (\w+) (\w+) (\w+) (\w+) (\w+) (.)/);

    let firstStep = matchGroups[2];
    let secondStep = matchGroups[8];

    // Check if already exists.
    // If not, add it
    if (!finalOrder.includes(firstStep)) {
      finalOrder.push(firstStep);
    }

    // Sort second step alphabetically
    // then add
  }
};

module.exports = steps;