/*
* head.js test cases.
*/

// Import Mocha and Chai methods
const assert = require('chai').assert;
const head   = require('../head');

// import assertEqual function
// const assertEqual = require('../assertEqual');
// // import head function
// const head = require('../head');


// Newest test cases using Mocha and Chai
describe("#head", () => {
  // Case 1
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });
  // Case 2
  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5');
  });
  // Case 3
  it("returns 5 for [5, 6, 7]", () => {
    assert.strictEqual(head([5]), 5);
  });
  // Case 4
  it("returns Hello for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.strictEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
  });
  // Case 5
  it("returns 1 for [1]", () => {
    assert.strictEqual(head([1]), 1);
  });
  // Case 6
  it("returns undefined for []", () => {
    assert.strictEqual(head([]), undefined);
  });
  // Case 7
  it("returns 77 for [77, 82, 16, 4, 5]", () => {
    assert.strictEqual(head([77, 82, 16, 4, 5]), 77);
  });
  // Case 8
  it("returns 'The' for ['The', 'Truth', 'Comes', 'Out']", () => {
    assert.strictEqual(head(["The", "Truth", "Comes", "Out"]), "Truth");
  });

});