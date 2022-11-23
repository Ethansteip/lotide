/*
*
* letterPositions - finds the positions of each letter in a string
*
*/

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

//
// eqArrays - will be used to compare the equality of values between 2 arrays.
//
// @param {array} arr1 - the first array.
// @param {array} arr2 - the second array that will be compared against the first array.
//

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


/*
*
* letterPositions - finds the positions of each letter in a string.
*
* @param {string} sentance - the string that we'll use to determine the position of each of it's letters.
*
*/

const letterPositions = function(sentance) {

  const results = {};
  // set all letter to lowercase and remove spaces from string.
  const stringWithoutSpaces = sentance.toLowerCase().replace(/ /g,'');

  // Loop through each character of a string and remove spaces.
  for (let i = 0; i < stringWithoutSpaces.length; i++) {
    //console.log(stringWithoutSpaces[i]);
    //if the key doesn't exist in results, add key to results with a value of an array containing its index.
    if (!results[stringWithoutSpaces[i]]) {
      results[stringWithoutSpaces[i]] = [i];
    //if they key does already exist in results, push the index of the letter to the existing array.
    } else {
      results[stringWithoutSpaces[i]].push(i);
    }
  }
  console.table(results);
  return results;
};

// Test Cases
assertArraysEqual(letterPositions("hello").h, [0]); // Pass
assertArraysEqual(letterPositions("hello").e, [1]); // Pass
assertArraysEqual(letterPositions("hello").l, [2, 3]); // Pass
assertArraysEqual(letterPositions("hello").o, [4]); // Pass