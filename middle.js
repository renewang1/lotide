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

const middle = function(array) {
  let middle = [];
  if (array.length <= 2) {
    return middle;
  } else if (array.length % 2 === 0) {
    middle = array.slice(array.length / 2 - 1, array.length / 2 + 1);
    return middle;
  } else if (array.length % 2 !== 0) {
    middle = array.slice(Math.floor(array.length / 2), Math.floor(array.length / 2) + 1);
    return middle;
  }
};

const testArray = [1, 2, 3, 4];
middle(testArray);
assertArraysEqual(testArray, [1, 2, 3, 4], true); //Should PASS

const testArray2 = [1, 2, 3];
assertArraysEqual(middle(testArray2), [2], true); //Should PASS

const testArray3 = [1, 2];
assertArraysEqual(middle(testArray3), [], true); //Should PASS

const testArray4 = [1];
assertArraysEqual(middle(testArray4), [], true); //Should PASS

const testArray5 = [];
assertArraysEqual(middle(testArray5), [], true); //Should PASS