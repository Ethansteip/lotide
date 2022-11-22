// Import the module
const assertEqual = require('../assertEqual');

// assertEqual test code
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);

assertEqual("Ethan Steip", "Ethan Steip");
assertEqual("Ethan Steip", "Not My Name");
assertEqual(15243, 15243);
assertEqual(15243, 34251);

assertEqual(true, false);
assertEqual(true, true);

assertEqual(1, "one");
assertEqual(undefined, NaN);