
//
// Write a function that accepts two arrays, and checks to see if
// the values of each array are equal between one another.
// Return true if all values are equal, else return false.
//

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

/*
* eqArrays - will be used to compare the equality of values between 2 arrays.
*
* @param {array} arr1 - the first array.
* @param {array} arr2 - the second array that will be compared against the first array.
*/

const eqArrays = function(arr1, arr2) {

  // create variable that holds true or false.
  let arrayComparison = true;

  // First, check if arrays are both the same length, return false if they are not.
  if (arr1.length !== arr2.length) {
    console.log("Arrays are not the same length and are not equal");
    arrayComparison = false;
    return arrayComparison;
  }

  // loop through each element of arr1 and arr2, comparing each value to one another.
  for (let i = 0; i < arr1.length; i++) {
    
    // Set the arrayComparison variable to true or false depending on the comparison of elements.
    if (arr1[i] === arr2[i]) {
      arrayComparison = true;
      //console.log(arr1[i], "=>", arr2[i]);
    } else {
      arrayComparison = false;
    }
  }
  return arrayComparison;
};

module.exports = eqArrays;

 