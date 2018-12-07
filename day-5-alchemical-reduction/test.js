const assert = require('assert');
const remainingPolymer = require('./polymer');
const shortestPolymer = require('./polymer-two');

describe('Day Five Part One Remaining Polymer', () => {
  it('should return 0 when input is aA', () => {
    let input = `aA`;

    assert.strictEqual(remainingPolymer(input), 0);
  });
});

describe('Day Five Part One Remaining Polymer', () => {
  it('should return 0 when input is abBA', () => {
    let input = `abBA`;

    assert.strictEqual(remainingPolymer(input), 0);
  });
});

describe('Day Five Part One Remaining Polymer', () => {
  it('should return 4 when input is abAB', () => {
    let input = `abAB`;

    assert.strictEqual(remainingPolymer(input), 4);
  });
});

describe('Day Five Part One Remaining Polymer', () => {
  it('should return 6 when input is aabAAB', () => {
    let input = `aabAAB`;

    assert.strictEqual(remainingPolymer(input), 6);
  });
});

describe('Day Five Part One Remaining Polymer', () => {
  it('should return 10 when input is dabAcCaCBAcCcaDA', () => {
    let input = `dabAcCaCBAcCcaDA`;

    assert.strictEqual(remainingPolymer(input), 10);
  });
});

// Part Two Tests
describe('Day Five Part Two Shortest Polymer', () => {
  it('should return 4 when input is dabAcCaCBAcCcaDA', () => {
    let input = `dabAcCaCBAcCcaDA`;

    assert.strictEqual(shortestPolymer(input), 4);
  });
});
