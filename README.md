# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @renewang1/lotide`

**Require it:**

`const _ = require('@renewang1/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(array)`: Takes an array input and returns the item at index 0 of the array. 
* `tail(array)`: Takes an array input and returns all items except for item at index 0 of the array, otherwise returns an empty array.
* `middle(array)`: Takes an array input and returns the middle items of the array. Returns a single item if array length is odd and an array of two items of array length is even.

module.exports = {
  head,
  tail,
  middle,
  eqArrays,
  countLetters,
  countOnly,
  eqObjects,
  findKey,
  findKeyByValue,
  flatten,
  letterPositions,
  map,
  takeUntil,
  without
};
