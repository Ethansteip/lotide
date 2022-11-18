/*
* findKey - Returns the key of the first element in an object that matches a given callback condition.
*/

/*
*
* assertEqual - Compares the returned array from another function and compares it with our expected array.
*
* @param {array} actual - Actual array returned from another function.
* @param {array} expected - The array we are expecting to get back.
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
* findKey - Returns the key of the first element in an object that matches a condition of the given callback condition.
*
* @param {object} object - The object we will seatch for a given key.
* @param {function} callback - a function that holds a condition that has to be met in order to find the object key.
*
*/

const findKey = function(object, callback) {


  for (let item in object) {
    if (callback(object[item])) {
      // console.log("The first key matching your search: ", item);
      return item;
    }
  }
  // console.log("No keys matching your search were found.");
  return undefined;
};
 
/* Test Cases */

assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 1 },
  "Akelarre":  { stars: 1 }
}, x => x.stars === 2), "noma"); // => "noma"

assertEqual(findKey({
  "Blue-Whale": { mammal: true, legs: 0 },
  "Dog":   { mammal: true, legs: 4 },
  "Cat":      { mammal: true, legs: 4 },
  "Kangaroo":   { mammal: true, legs: 2 },
  "Penguin":       { mammal: false, legs: 2 },
  "Moose":  { mammal: true, legs: 4 }
}, x => x.legs === 2), "Kangaroo"); // => Kangaroo

assertEqual(findKey({
  "Blue-Whale": { mammal: true, legs: 0 },
  "Dog":   { mammal: true, legs: 4 },
  "Cat":      { mammal: true, legs: 4 },
  "Kangaroo":   { mammal: true, legs: 2 },
  "Penguin":       { mammal: false, legs: 2 },
  "Moose":  { mammal: true, legs: 4 }
}, x => x.mammal === false), "Penguin"); // => Penguin

assertEqual(findKey({
  "Blue-Whale": { mammal: true, legs: 0 },
  "Dog":   { mammal: true, legs: 4 },
  "Cat":      { mammal: true, legs: 4 },
  "Kangaroo":   { mammal: true, legs: 2 },
  "Penguin":       { mammal: false, legs: 2 },
  "Moose":  { mammal: true, legs: 4 }
}, x => x.legs === 10), undefined); // => undefined