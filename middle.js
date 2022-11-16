/*
*
* middle.js - will take in an array and return the middle-most element(s) of the given array.
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
* middle - will take in an array and return the middle-most element(s) of the given array.
*
* @param {array} arr - the array that we will be finding the middle element of.
*
*/

const middle = function(arr) {

  // save length of the array to variable
  const arrLength = arr.length;
  const findMiddle = Math.floor(arrLength / 2);
  const middleElements = [];

  // check if the array holds 2 or less, elements. If true return empty array.
  if (arrLength <= 2) {
    //middleElements = [];
    console.log(middleElements);
    return middleElements;
  }
  // Check if the array holds an odd number of elements. Push middle element to new array if it does.
  if (arr.length % 2 !== 0) {
    // console.log(arr[findMiddle]);
    middleElements.push(arr[findMiddle]);
  }
  // Check if the array holds an even number of elements. Push middle elements to new array if it does.
  if (arr.length % 2 === 0) {
    // console.log(arr[Math.floor(arrLength / 2)]);
    middleElements.push(arr[findMiddle - 1], arr[findMiddle]);
  }

  console.log(middleElements);
  return middleElements;

};

// Test Cases
middle([1, 2, 3, 4, 5, 6, 7]); // => [4]
middle([1, 2, 3, 4]); // => [2, 3]
middle(["Ethan", "Likes"]); // => []
middle(["Ethan", "Likes", "To", "Code", "Fun", "Things"]); // => ["To", "Code"]
middle([1, 2]); // => []
console.log("\n");

assertArraysEqual(middle([45, 11, "Ethan", 799, 1000, 23]), ["Ethan", 799]); // => Pass ["Ethan", 799]
assertArraysEqual(middle([49, 16, 222, 56, 1, 2]), [222, 56]); // => Pass [222, 56]
assertArraysEqual(middle([19, 0]), []); // => Pass []
assertArraysEqual(middle([]), []); // => Pass []
assertArraysEqual(middle([22]), []); // => Pass []
console.log("\n");

assertArraysEqual(middle([22, 46, 712]), [22, 46]); // => Fail [46]
assertArraysEqual(middle([22, 46, 712, 109, 191]), [46]); // => Fail [712]
