const assert = require('assert');
const steps = require('./steps');

describe('Day Seven Part One Steps', () => {
  it('should return CABDFE', () => {
    let input =
    `Step C must be finished before step A can begin.
    Step C must be finished before step F can begin.
    Step A must be finished before step B can begin.
    Step A must be finished before step D can begin.
    Step B must be finished before step E can begin.
    Step D must be finished before step E can begin.
    Step F must be finished before step E can begin.`;

    assert.strictEqual(steps(input), 'CABDFE');
  });
  
});