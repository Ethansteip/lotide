/*
* tail.js test cases.
*/

// Import Mocha and Chai methods
const assert = require('chai').assert;
// Import tail
const tail   = require('../tail');

// Newest test cases using Mocha and Chai
describe("#tail", () => {
  // Case 1
  it("returns 2 for array tail length of ['Hello', 'Lighthouse', 'Labs]", () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]).length, 2);
  });
  // Case 2
  it("returns index 0 of tail array ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"])[0], 'Lighthouse');
  });
  // Case 3
  it("returns index 1 of tail array ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"])[1], 'Labs');
  });
  // Case 4
  it("returns 4 for array tail length of [12, 76, 9678, 10, 10]", () => {
    assert.deepEqual(tail([12, 76, 9678, 10, 10]).length, 4);
  });
  // Case 5
  it("returns index 0 for array tail [12, 76, 9678, 10, 10]", () => {
    assert.deepEqual(tail([12, 76, 9678, 10, 10])[0], 76);
  });
  // Case 6
  it("returns an empty array for arrays containing 1 or less elements [1]", () => {
    assert.deepEqual(tail([1]), []);
  });
  // Case 7
  it("returns an empty array for arrays containing 1 or less elements []", () => {
    assert.deepEqual(tail([]), []);
  });
});

// Test Case 1: Checking the returned array elements
// console.log("Starting Tests:");
// const result = tail(["Hello", "Lighthouse", "Labs"]);
// assertEqual(result.length, 2); // ensures we get back 2 elements
// assertEqual(result[0], "Lighthouse"); // ensures the first element is "Lighthouse"
// assertEqual(result[1], "Labs"); // ensures the second elements is "Labs"
// console.log("\n");

// Test Case 2: Checking the returned array elements

// const result2 = tail([12, 76, 9678, 10, 10]);
// assertEqual(result2.length, 4); // ensures we get back 4 elements
// assertEqual(result2[result2.length - 1], 10); // ensures the last element is 10
// assertEqual(result2[0], 76); // ensures the first element is 76
// console.log("\n");

// Test Case 3: Check that the original array was not modified!
// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words);
// assertEqual(words.length, 3);
// console.log("\n");

// Test Case 4: An array with only 1 element should yeild an empty array.
// const result3 = tail([1324]);
// assertEqual(result3.length, 0);
// console.log("\n");

// Test Case 5: An array with 0 elements should yeild an empty array.
// const result4 = tail([]);
// assertEqual(result4.length, 0);