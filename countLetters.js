/*
*
* countLetters - takes in a sentence (as a string) and then returns a count of each of the letters in that sentence.
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
* countLetters - takes in a sentence (as a string) and then returns a count of each of the letters in that sentence.
*
* @param {string} sentance - The string that we'll use to count its idividual letters.
*
*/

const countLetters = function(sentance) {

  //initialize empty object
  const results = {};
  // Loop through the sentance to break it down to its individual letters.
  for (let char of sentance.toLowerCase()) {
    //console.log(char);

    //if the key doesn't exist in results, add key to results with a value of 1.
    if (!results[char]) {
      results[char] = 1;
    //if they key does already exist in results, increment the value of the key by 1.
    } else {
      results[char]++;
    }
  }
  console.table(results);
  return results;
};


// Test Cases

const result1 = countLetters("Mississippi");
assertEqual(result1["m"], 1); // => Pass
assertEqual(result1["i"], 4); // => Pass
assertEqual(result1["s"], 4); // => Pass
assertEqual(result1["p"], 2); // => Pass
