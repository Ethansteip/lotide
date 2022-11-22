// import assertEqual function
const assertEqual = require('../assertEqual');
// import head function
const head = require('../head');

// Head.js Test Cases
assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
console.log('\n');
assertEqual(head([1]), 1);
assertEqual(head([], undefined));
console.log('\n');
assertEqual(head([77, 82, 16, 4, 5]), 4);
assertEqual(head(["The", "Truth", "Comes", "Out"]), "Truth");