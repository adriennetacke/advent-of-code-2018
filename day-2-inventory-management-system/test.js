const assert = require('assert');
const checksum = require('./checksum');
const checksumTwo = require('./checksum-two');

// Day Two - Part One Tests
describe('Part One Checksum', () => {
  it('should return 12 as checksum', () => {
    let input = 
    `abcdef
    bababc
    abbcde
    abcccd
    aabcdd
    abcdee
    ababab
    `;

    assert.strictEqual(checksum(input), 12);
  })
})

// Day Two - Part Two Tests
describe('Part Two', () => {
  it('should find common characters', () => {
    const boxIds =
      `abcde
       fghij
       klmno
       pqrst
       fguij
       axcye
       wvxyz`;

    assert.strictEqual(checksumTwo(boxIds), 'fgij');
  });
});