/*
* assertArraysEqual - Test Cases
*/

const assertArraysEqual = require('../assertArraysEqual');

assertArraysEqual([1, 2, 3], [1, 2, 3]); // => true
assertArraysEqual([2, 2, 3], [1, 2, 1]); // => false

assertArraysEqual(["Ethan", "Is", "Learning", "To", "Code"], ["Ethan", "Is", "Learning", "To"]); // => false
assertArraysEqual(["Ethan", "Is", "Learning", "To", "Code"], ["Ethan", "Is", "Learning", "To", "Code"]); // => true

assertArraysEqual([1, 55, 10, 22, 33], [1, 55, 10, 22, 33]); // => true
assertArraysEqual([1, 55, 10, 22, 33], [1, 55, 10, 22, 0]); // => false