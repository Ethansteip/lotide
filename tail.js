// Will use the assertEqual function in our test cases.
const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}.`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}.`);
  }
};

// Returns the tail (all elements passed index 0) of an array.
const tail = function(array) {

  let newArray = [];

  // loop through the inputted array, add each elemnt past index 0 to new array.
  for (let i = 0; i < array.length; i++) {
    if (i > 0) {
      newArray.push(array[i]);
      //console.log(array[i]);
    }
  }

  console.log(newArray);
  return newArray;
};



// Test Case 1: Checking the returned array elements

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensures we get back 2 elements
assertEqual(result[0], "Lighthouse"); // ensures the first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensures the second elements is "Labs"
console.log("\n");

// Test Case 2: Checking the returned array elements
const result2 = tail([12, 76, 9678, 10, 10]);
assertEqual(result2.length, 4); // ensures we get back 4 elements
assertEqual(result2[result2.length - 1], 10); // ensures the last element is 10
assertEqual(result2[0], 76); // ensures the first element is 76
console.log("\n");

// Test Case 3: Check that the original array was not modified!
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);
console.log("\n");

// Test Case 4: An array with only 1 element should yeild an empty array.
const result3 = tail([1324]);
assertEqual(result3.length, 0);
console.log("\n");

// Test Case 5: An array with 0 elements should yeild an empty array.
const result4 = tail([]);
assertEqual(result4.length, 0);


