//
// eqArrays - test Cases
//

// Import assertEqual
const assertEqual = require('../assertEqual');
// Import eqArrays
const eqArrays = require('../eqArrays');

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => true
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), true); // => false

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => true
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), true); // => false

assertEqual(eqArrays(["Ethan", "likes", "to", "code"], ["1", "2", 3]), true); // => false
assertEqual(eqArrays([], []), true); // => true
assertEqual(eqArrays([], []), false); // => false