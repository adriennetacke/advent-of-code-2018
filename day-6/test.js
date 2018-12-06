const assert = require('assert');
const findLargestArea = require('./one');


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

// aaaaa.cccc
// aAaaa.cccc
// aaaddecccc
// aadddeccCc
// ..dDdeeccc
// bb.deEeecc
// bBb.eeee..
// bbb.eeefff
// bbb.eeffff
// bbb.ffffFf

Math.abs(1 - 1) + Math.abs(6 - 1);

[0[0,1,2,3,4,5], 1[0,1,2,3,4,5], 2[0,1,2,3,4,5]]