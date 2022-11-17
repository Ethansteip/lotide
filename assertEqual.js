/*
*
* assertEqual - Compares the returned array from another function and compares it with our expected array.
*
* @param {array} actual - actual array returned from another function.
* @param {array} expected - the array we are expecting to get back.
*
*/

const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}.`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}.`);
  }
};

// Test Code
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);

assertEqual("Ethan Steip", "Ethan Steip");
assertEqual("Ethan Steip", "Not My Name");
assertEqual(15243, 15243);
assertEqual(15243, 34251);

assertEqual(true, false);
assertEqual(true, true);

assertEqual(1, "one");
assertEqual(undefined, NaN);



