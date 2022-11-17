/*
*
* countOnly js - Takes in a collection of items and returns the count for a specific subset of those items.
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
* countOnly - Takes in a collection of items and returns the count for a specific subset of those items.
*
* @param {array} allItems - An array of all the information we need to sort.
* @param {object} itemsToCount - an object specifying what to count
*
*/

const countOnly = function(allItems, itemsToCount) {

  const results = {};

  // Loop through all keys in the allItems object
  for (const item of allItems) {
    //console.log(item);

    //make sure we only count items that are part of the itemsToCount object.
    if (itemsToCount[item]) {
      //console.log(itemsToCount[item]);

      //if the key doesn't exist in results, add key to results with a value of 1.
      if (!results[item]) {
        results[item] = 1;
      //if they key does already exist in results, increment the value of the key by 1.
      } else {
        results[item]++;
      }
    }
  }


  console.table(results);
  return results;
};

// Test Cases

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);