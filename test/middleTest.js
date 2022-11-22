// middle.js test cases

// import middle
const middle = require('../middle');

// import assertArraysEqual
const assertArraysEqual = require('../assertArraysEqual');

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

assertArraysEqual(middle([22, 46, 712]), [22, 46]); // => Fail - 46 !== 22, 46.
assertArraysEqual(middle([22, 46, 712, 109, 191]), [46]); // => Fail - 712 !== 46
