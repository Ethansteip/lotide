# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @ethan.steip/lotide`

**Require it:**

`const _ = require('@ethan.steip/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:


* `assertArraysEqual(arr1, arr2)`: Takes in two arrays and console.logs the appropriate message.
* `assertEqual(actual, expected)`: Compares the returned array from another function and compares it with our expected array.
* `assertObjectsEqual(object1, object2)`: Compares the values of 2 objects.
* `countLetters(sentance)`: Takes in a sentence (as a string) and then returns a count of each of the letters in that sentence.
* `eqArrays(arr1, arr2)`: A function that accepts two arrays, and checks to see if the values of each array are equal between one another. Return true if all values are equal, else return false.
* `eqObjects(object1, object2)`: Takes in two objects and returns true or false, based on a perfect match.
* `findKey(actual, expected)`: Returns the key of the first element in an object that matches a given callback condition.
* `findKeyByValue(object, value)`: Takes in an object and a value. It should scan the object and return the first key which contains the given value. If no key with that given value is found, then it should return undefined.
* `head(array)`: Returns the element at index zero in a given array.
* `letterPositions(sentance)`: Finds the positions of each letter in a string
* `map(array, callback)`: Allows you to run a callback function on each item in a list.
* `middle(array)`: Will take in an array and return the middle-most element(s) of the given array.
* `tails(array)`: Returns a new array containing all elements greater than index 0 from the provided array.
* `takeUntil(array, callback)`: Takes a slice of an array with elements taken from the beginning until a condition is met.
* `without(array, itemsToRemove)`: Creates an array excluding all given values.