/*
* map - A function that allows you to run a callback function on each item in a list.
*/

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
* @param {array} arr1 - The first array.
* @param {array} arr2 - The second array that will be compared against the first array.
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
 
const words = ["ground", "control", "to", "major", "tom"];
 
/*
*
* map - Runs a callback function on each item in your list.
*
* @param {map} array - The list you will iterate over.
* @param {function} callback - Your callback function.
*
*/

const map = function(array, callback) {
  
  const results = [];

  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};
 
/* Test Cases */
const results1 = map(words, word => word[0]);
console.log(results1);

const results2 = map([2, 4, 6, 8, 10, 12, 14, 16], array => array / 2);
assertArraysEqual(results2, [1, 2, 3, 4, 5, 6, 7, 8]); // => Pass

const results3 = map([10, 100, 10000, 10, 1000000, 10, 100], array => array * 2);
assertArraysEqual(results3, [20, 200, 20000, 20, 2000000, 20, 200]); // => Pass

const results4 = map(["everything", "to", "upper", "case"], array => array.toUpperCase());
assertArraysEqual(results4, ["EVERYTHING", "TO", "UPPER", "CASE"]); // => Pass