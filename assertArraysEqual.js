/*
* assertArraysEqual - Takes in two arrays and console.logs the appropriate message.
*
* @param {array} arr1 - the first array.
* @param {array} arr2 - the second array that will be compared against the first array.
*/

// Import eqArrays
const eqArrays = require('./eqArrays');

const assertArraysEqual = function(arr1, arr2) {

  // Checks the equality between two arrays using the eqArrays function.
  // Then console.logs either a pass or fail message.
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}.`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${arr1} !== ${arr2}.`);
  }
};

module.exports = assertArraysEqual;