/*
*
* middle.js - will take in an array and return the middle-most element(s) of the given array.
*/

/*
* middle - will take in an array and return the middle-most element(s) of the given array.
*
* @param {array} arr - the array that we will be finding the middle element of.
*
*/

const middle = function(arr) {

  // save length of the array to variable
  const arrLength = arr.length;
  // find the middle index of the array
  const findMiddle = Math.floor(arrLength / 2);
  //initialize new array that will hold middle element(s)
  const middleElements = [];

  // check if the array holds 2 or less elements. If true, return empty array.
  if (arrLength <= 2) {
    console.log(middleElements);
    return middleElements;
  }
  // Check if the array holds an odd number of elements. If true, push middle element to new array.
  if (arr.length % 2 !== 0) {
    // console.log(arr[findMiddle]);
    middleElements.push(arr[findMiddle]);
  }
  // Check if the array holds an even number of elements. If true, push middle elements to new array.
  if (arr.length % 2 === 0) {
    // console.log(arr[Math.floor(arrLength / 2)]);
    middleElements.push(arr[findMiddle - 1], arr[findMiddle]);
  }

  console.log(middleElements);
  return middleElements;

};

// Export middle
module.exports = middle;
