const assert = require('assert');
const findLargestArea = require('./manhattan');


describe('Day Six Part One Find Largest Finite Area', () => {
  it('should return 17 with given coordinates', () => {
    let input = 
    `1, 1
    1, 6
    8, 3
    3, 4
    5, 5
    8, 9`;
    assert.strictEqual(findLargestArea(input), 17);
  })
});
