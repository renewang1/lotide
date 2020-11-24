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

const without = function(source, itemsToRemove) {
  newArray = [];
  for (let value of source) {
    if (!itemsToRemove.includes(value)) {
      newArray.push(value);
    }
  }
  return newArray;
};

console.log(without([1, 2, 3], [1])) // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])) // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

testArray = [1, 2, 3];
without(testArray, [1, 2]);
assertArraysEqual(testArray, [1, 2, 3]); // Should PASS

assertArraysEqual(without([1, 2, 3], []), [1, 2, 3]); // Should PASS
assertArraysEqual(without([], [1, 2, 3]), []); // Should PASS
