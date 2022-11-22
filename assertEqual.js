/*
*
* assertEqual - Compares the returned array from another function and compares it with our expected array.
*
* @param {array} actual - Actual array returned from another function.
* @param {array} expected - The array we are expecting to get back.
*
*/

const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}.`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}.`);
  }
};

// Export assertEqual
module.exports = assertEqual;


