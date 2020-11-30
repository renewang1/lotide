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
    console.log(`✅✅✅ Assertion passed: [${array1}] === [${array2}]`);
  } else {
    console.log(`🛑🛑🛑 Assertion failed: [${array1}] !== [${array2}]`);
  }
};

const words = ["ground", "control", "to", "major", "tom"];


const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

module.exports = map;


const results1 = map(words, word => word[0]);
console.log(results1);

const array1 = ['hello', 'hi', 'hey'];
const results2 = map(array1, word => word + ' there');
assertArraysEqual(results2, ['hello there', 'hi there', 'hey there']);

const array2 = [1, 2, 3];
const results3 = map(array2, num => num * 2);
assertArraysEqual(results3, [2, 4, 6]);

const array3 = [];
const results4 = map(array3, word => word[0]);
assertArraysEqual(results4, []);

