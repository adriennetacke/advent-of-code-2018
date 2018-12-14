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

  // Start with parent-less steps
  const orphanedCandidates = allSteps.filter(x => !x.parents.length);
  let stagedSteps = new Set();

  if (orphanedCandidates.length) {
    orphanedCandidates.map(x => {
      stagedSteps.add(x.step);
    });
  }

  console.log(stagedSteps);

  while (true) {
    const sortedStagedSteps = [...stagedSteps].sort();
    
    let i = 0;
    let potentialStep = allSteps.find(s => s.step === sortedStagedSteps[i]);
    
    if (!potentialStep.parents.length || potentialStep.parents.every(p => sortedStagedSteps.includes(x))) {
      finalOrder.push(potentialStep.step);
      stagedSteps.add(potentialStep.children);
      stagedSteps.delete(potentialStep.step);
      break;
    } else if (potentialStep.parents.every(p => sortedStagedSteps.includes(x))) {
      finalOrder.push(potentialStep.step);
    };
    
    i++;

  }



  // Check for no parents or available steps
    // Add all candidates to watchlist
    // If more than one, sort alphabetically 
    // Find first in alphabet, then add to final order
  // Find children
    // Add children to watchlist that don't exist yet
  // Go through new watchlist alphabetically to find next likely step
    // Find candidate's required parents
    // Compare all required parents to available steps in watchlist
  // Add next step
};

module.exports = steps;