const assert = require('assert');
const calibrate = require('./calibrate');
const calibrateDuplicates = require('./calibrate-two');

// Day One - Part One Tests 
describe('Part One Calibrate', () => {
  it('should return 3 when input is +1, -2, +3, +1', () => {
    let input = 
    `+1
    -2
    +3
    +1`;
    assert.strictEqual(calibrate(input), 3);
  });
});

describe('Part One Calibrate', () => {
  it('should return 3 when input is +1, +1, +1', () => {
    let input = 
    `+1
    +1
    +1`;
    assert.strictEqual(calibrate(input), 3);
  });
});

describe('Part One Calibrate', () => {
  it('should return 0 when input is +1, +1, -2', () => {
    let input = 
    `+1
    +1
    -2`;
    assert.strictEqual(calibrate(input), 0);
  });
});

describe('Part One Calibrate', () => {
  it('should return -6 when input is -1, -2, -3', () => {
    let input = 
    `-1
    -2
    -3`;
    assert.strictEqual(calibrate(input), -6);
  });
});

// Day One - Part Two Tests 
describe('Part Two Calibrate Duplicates', () => {
  it('should return 2 when input is +1, -2, +3, +1', () => {
    let input = 
    `+1
    -2
    +3
    +1`;
    assert.strictEqual(calibrateDuplicates(input), 2);
  });
});

describe('Part Two Calibrate Duplicates', () => {
  it('should return 0 when input is +1, -1', () => {
    let input = 
    `+1
    -1`;
    assert.strictEqual(calibrateDuplicates(input), 0);
  });
});

describe('Part Two Calibrate Duplicates', () => {
  it('should return 10 when input is +3, +3, +4, -2, -4', () => {
    let input = 
    `+3
    +3
    +4
    -2
    -4`;
    assert.strictEqual(calibrateDuplicates(input), 10);
  });
});

describe('Part Two Calibrate Duplicates', () => {
  it('should return 5 when input is -6, +3, +8, +5, -6', () => {
    let input = 
    `-6
    +3
    +8
    +5
    -6`;
    assert.strictEqual(calibrateDuplicates(input), 5);
  });
});

describe('Part Two Calibrate Duplicates', () => {
  it('should return 14 when input is +7, +7, -2, -7, -4', () => {
    let input = 
    `+7
    +7
    -2
    -7
    -4`;
    assert.strictEqual(calibrateDuplicates(input), 14);
  });
});