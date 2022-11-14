
// Will use the assertEqual function in our test cases.
const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}.`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}.`);
  }
};


const head = function(array) {

  return array[0];

};



// Test Cases
assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
console.log('\n');
assertEqual(head([1]), 1);
assertEqual(head([], undefined));
console.log('\n');
assertEqual(head([77, 82, 16, 4, 5]), 4);
assertEqual(head(["The", "Truth", "Comes", "Out"]), "Truth");






