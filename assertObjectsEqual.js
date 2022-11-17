/*
*
* assertObjectsEqual - Compares the values of 2 objects.
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
* eqObjects - takes in two objects and returns true or false, based on a perfect match.
*
* @param {object} object1 - The first object we will be comparing.
* @param {object} object2 - the second object that we will be comparing to object1.
*
*/

const eqObjects = function(object1, object2) {

  // Determine the length of each object.
  let object1Length = Object.keys(object1).length;
  let object2Length = Object.keys(object2).length;
  
  // Compare the length of each object and return false if lengths are not equal.
  if (object1Length !== object2Length) {
    console.log("Objects are not of equal length");
    return false;
  }

  // Loop through the object and compare values.
  for (let key in object1) {
    // Check the objects values for arrays. If both values are arrays, compare the arrays.
    if (Array.isArray(object1[key]) && Array.isArray(object1[key])) {
      if (eqArrays(object1[key], object2[key]) === false) {
        console.log("There is a mismatch: ", key, ":", object1[key], " !== ", key, ":", object2[key]);
        return false;
      }
      /* If values are not arrays, compare object1's values to
      * objects2's. If there is an unequal value, print and return false.
      */
    } else if (object1[key] !== object2[key]) {
      console.log("There is a mismatch: ", key, ":", object1[key], " !== ", key, ":", object2[key]);
      return false;
    }


  }
  // Else, object1 and object2's values are equal, print and return true.
  console.log("Both objects are a perfect match!");
  return true;
  
};


/*
*
* assertObjectsEqual - Compares the equality of 2 objects.
*
* @param {object} actual - The object that was actually returned by a function.
* @param {object} expected - The object that we're expecting to be returned by a function.
*
*/

const assertObjectsEqual = function(actual, expected) {

  const inspect = require('util').inspect;

  // Checks the equality between two objects using the eqObjects function.
  // Then console.logs either a pass or fail message.
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}.`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}.`);
  }
};

// Test Cases
const a = { a: "Group", b: "Therapy", c: "With", d: "Above", e: "And", f: "Beyond."};
const b = { a: "Group", b: "Therapy", c: "With", d: "Above", e: "And", f: "Beyond."};
assertObjectsEqual(a, b); // => true

const c = { a: [1, 2, 5, 33], b: "Ethan", c: 22};
const d = { b: "Ethan", a: [1, 2, 5, 33], c: 22};
assertObjectsEqual(c, d); // => Pass
assertObjectsEqual(a, c); // => Fail
