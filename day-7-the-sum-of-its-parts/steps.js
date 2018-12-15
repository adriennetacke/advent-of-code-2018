const steps = (input) => {
  let steps = input.split('\n');

  let finalOrder = [];
  let allSteps = [];

  // Prepare parent-child relationships
  for (let i = 0; i < steps.length; i++) {
    const step = steps[i];
    const matchGroups = step.match(/(\w+) (.) (\w+) (\w+) (\w+) (\w+) (\w+) (.)/);

    const parent = matchGroups[2];
    const child = matchGroups[8];

    if (!allSteps.find(x => x.step === parent)) {
      allSteps.push({
        step: parent,
        children: [],
        parents: []
      });
    };

    if (!allSteps.find(x => x.step === child)) {
      allSteps.push({
        step: child,
        children: [],
        parents: []
      });
    };

    const parentRelationship = allSteps.find(x => x.step === parent);

    if (!parentRelationship.children.includes(child)) {
      parentRelationship.children.push(child);
    };

    const childRelationship = allSteps.find(x => x.step === child);

    if(!childRelationship.parents.includes(parent)) {
      childRelationship.parents.push(parent);
    }
  }

  while (allSteps.length) {
    let potentialStep = allSteps
      .filter(x => !x.parents.length)
      .map(y => y.step)
      .sort()[0];
    
    finalOrder.push(potentialStep);
    allSteps.splice(allSteps.indexOf(allSteps.find(x => x.step === potentialStep)), 1);

    allSteps
      .filter(a => a.parents.includes(potentialStep))
      .forEach(y => y.parents.splice(y.parents.indexOf(potentialStep), 1));
  }

  return finalOrder.join('');
};

module.exports = steps;