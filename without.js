/*
*
* Without.js - Creates an array excluding all given values.
*
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
* @param {array} arr1 - the first array.
* @param {array} arr2 - the second array that will be compared against the first array.
*
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
* without - Creates an array excluding all given values.
*
* @param {array} source - initial array that we will be removing values from.
* @param {array} itemsToRemove - Values that will be removed from source.
*
*/

const without = function(source, itemsToRemove) {

  // Initialize new array as a copy of the source array.
  const cleanArray = source;

  // loop through each element of cleanArray.
  for (let i = 0; i < source.length; i++) {
    // loop through and compare each element of cleanArray against each element in itemsToRemove.
    for (let j = 0; j < itemsToRemove.length; j++) {
      //console.log(cleanArray[i], "=> ", itemsToRemove[j]);
      if (cleanArray[i] === itemsToRemove[j]) {
        // remove element (splice) from cleanArray if it matches element in itemsToRemove.
        cleanArray.splice(i, 1);
      }
    }
  }
  //return cleanArray.
  console.log(cleanArray);
  return cleanArray;
};



// Test Cases

without([1, 3, 2, 4, 5], [1, 2]); // => [3, 4, 5]
without([1, 2, 3], [1]); // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]); // => ["1", "2"]

assertArraysEqual(without([1, 3, 2, 4, 5], [1, 2]), [3, 4, 5]); // => Pass
assertArraysEqual(without([1, 3, 2, 4, 5], [1, 3, 2, 4, 5]), []); // => Pass
assertArraysEqual(without([1, 3, 2, 4, 5], [1, 3, 2, 4, 5]), [1, 2, 3, 4, 5]); // => Fail
assertArraysEqual(without(["Ethan", "Likes", "To", "Code"], ["To"]), ["Ethan", "Likes", "Code"]); // => Pass

// Test that the original array (source) is not altered and we are returning a new array.
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // => ["hello", "world"]
assertArraysEqual(words, ["hello", "world", "lighthouse"]); // => Fail - Assertion should fail as the original array is not the same as the modified array.