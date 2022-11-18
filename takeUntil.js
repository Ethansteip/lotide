/*
* takeUntil - Takes a slice of an array with elements taken from the beginning until a condition is met.
*/
 
/*
* eqArrays - will be used to compare the equality of values between 2 arrays.
*
* @param {array} arr1 - The first array.
* @param {array} arr2 - The second array that will be compared against the first array.
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

 
/*
*
* takeUntil - Takes a slice of an array with elements taken from the beginning until a condition is met.
* @param {array} array - The array we will be using.
* @param {callback} callback - information it holds
*
*/

const takeUntil = function(array, callback) {
  const results = [];
  
  for (let item of array) {
    
    if (!callback(item)) {
      results.push(item);
    } else {
      break;
    }
  }
  return results;
};
 
/* Test Cases */

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ]); // => Pass

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
assertArraysEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ]); // => Pass

console.log('---');

const data3 = [1, 4, 22, 11, 42, 89, 100];
const results3 = takeUntil(data3, x => x % 10 === 0);
assertArraysEqual(results3, [1, 4, 22, 11, 42, 89]); // => Pass
assertArraysEqual(results3, [1, 4, 22]); // => Fail
