const eqArrays = function(array1, array2) {
  let equal = true;
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      equal = false;
    }
  }
  return equal;
};

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log('These arrays are equal!');
  } else {
    console.log('These arrays are not equal!');
  }
};

const flatten = function(array) {
  let newArray = [];
  for (let value of array) {
    if (Array.isArray(value)) {
      for (let item of value) {
        newArray.push(item);
      }
    } else {
      newArray.push(value);
    }
  }
  return newArray;
};

module.exports(flatten);

console.log(flatten([1, 2, [1, 2, 3]]));

const testArray = [1, 2, [1, 2, 3]];
flatten(testArray);
assertArraysEqual(testArray, [1, 2, [1, 2, 3]], true); // Should PASS

