/*
* middle.js test cases.
*/

// Import Mocha and Chai methods
const assert = require('chai').assert;
// Import middle
const middle   = require('../middle');

// Newest test cases using Mocha and Chai
describe("#middle", () => {
  // Case 1
  it('returns [4] for [1, 2, 3, 4, 5, 6, 7]', () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6, 7]), [4]);
  });
  // Case 2
  it('returns [2, 3] for [1, 2, 3, 4]', () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });
  // Case 3
  it("returns [] for ['Ethan', 'Likes']", () => {
    assert.deepEqual(middle(['Ethan', 'Likes']), []);
  });
  // Case 4
  it("returns ['To', 'Code'] for ['Ethan', 'Likes', 'To', 'Code', 'Fun', 'Things']", () => {
    assert.deepEqual(middle(['Ethan', 'Likes', 'To', 'Code', 'Fun', 'Things']), ['To', 'Code']);
  });
  // Case 5
  it("returns ['Ethan', 799] for [45, 11, 'Ethan', 799, 1000, 23]", () => {
    assert.deepEqual(middle([45, 11, 'Ethan', 799, 1000, 23]), ['Ethan', 799]);
  });
  // Case 6
  it("returns [222, 56] for [49, 16, 222, 56, 1, 2]", () => {
    assert.deepEqual(middle([49, 16, 222, 56, 1, 2]), [222, 56]);
  });
  // Case 7
  it("returns [] for []", () => {
    assert.deepEqual(middle([]), []);
  });
  // Case 8
  it("returns [] for [2653]", () => {
    assert.deepEqual(middle([]), []);
  });

});
