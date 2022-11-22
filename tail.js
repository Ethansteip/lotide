
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

module.exports = tail;