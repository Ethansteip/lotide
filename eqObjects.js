/*
*
* eqObjects - takes in two objects and returns true or false, based on a perfect match.
*
*/

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

// Test Cases

const ab = { a: "1", b: "5", c: "10" };
const ba = { b: "5", a: "1", c: "10" };
assertEqual(eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false); // => true


// Test Case - Arrays as values

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), true); // => false