// AssertArraysEqual implementation.


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
    //console.log("Arrays are not the same length and are not equal");
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

/*
* assertArraysEqual - Takes in two arrays and console.logs the appropriate message.
*
* @param {array} arr1 - the first array.
* @param {array} arr2 - the second array that will be compared against the first array.
*/

const assertArraysEqual = function(arr1, arr2) {

  // Checks the equality between two arrays using the eqArrays function.
  // Then console.logs either a pass or fail message.
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}.`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${arr1} !== ${arr2}.`);
  }
};

/*
* Test Cases
*/

assertArraysEqual([1, 2, 3], [1, 2, 3]); // => true
assertArraysEqual([2, 2, 3], [1, 2, 1]); // => false

assertArraysEqual(["Ethan", "Is", "Learning", "To", "Code"], ["Ethan", "Is", "Learning", "To"]); // => false
assertArraysEqual(["Ethan", "Is", "Learning", "To", "Code"], ["Ethan", "Is", "Learning", "To", "Code"]); // => true