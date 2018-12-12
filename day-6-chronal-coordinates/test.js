const assert = require('assert');
const findLargestArea = require('./manhattan');
const findComprehensiveArea = require('./manhattan-two');


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
  });
});

describe('Day Six Part Two Find Largest Comprehensive Area', () => {
  it('should return 16 with given coordinates', () => {
    let input = 
    `1, 1
    1, 6
    8, 3
    3, 4
    5, 5
    8, 9`;
    assert.strictEqual(findComprehensiveArea(input, 32), 16);
  });
});
