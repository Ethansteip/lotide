/*
*
* findKeyByValue - takes in an object and a value. It should scan the object
* and return the first key which contains the given value. If no key with that
* given value is found, then it should return undefined.
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
*
* findKeyByValue - takes in an object and a value. It should scan the object
* and return the first key which contains the given value. If no key with that
* given value is found, then it should return undefined.
*
* @param {object} object - the object whos key => value we will be searching for.
* @param {number} value - the value that we will be looking for inside the object.
*/

const findKeyByValue = function(object, value) {

  // initialize variable to hold object keys;
  const keys = Object.keys(object);

  // loop over each of the keys and check their values against the given input value
  for (let char of keys) {
    if (object[char] === value) {
      console.log(char);
      //return the key if there is a match!
      return char;
    }
  }
};

// Test Cases
const bestTVShowsByGenre = {
  "sci_fi": "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire",
  horror: "The Ritual",
  romcom: "50 first dates",
  holiday: "Elf"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama"); // => Pass
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined); // => Pass
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Ritual"), "horror"); // => Pass
assertEqual(findKeyByValue(bestTVShowsByGenre, "50 first dates"), "romcom"); // => Pass
assertEqual(findKeyByValue(bestTVShowsByGenre, "Elf"), "holiday"); // => Pass
assertEqual(findKeyByValue(bestTVShowsByGenre, "Alien"), undefined); // => Pass

