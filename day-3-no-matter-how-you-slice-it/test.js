const assert = require('./assert');
const overlap = require('./overlap');
const nonOverlap = require('./non-overlap');

describe('Day Three Part One Overlap', () => {
  it('should return 4 overlapping inches', () => {
    let input =
    `#1 @ 1,3: 4x4
    #2 @ 3,1: 4x4
    #3 @ 5,5: 2x2`;
    assert.strictEqual(overlap(input), 4);
  })
})