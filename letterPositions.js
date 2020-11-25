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

const letterPositions = function(sentence) {
  const results = {};
  for (const i in sentence) {
    if (results[sentence[i]]) {
      results[sentence[i]].push(Number(i));
    } else {
      results[sentence[i]] = [];
      results[sentence[i]].push(Number(i));
    }
  }
  delete results[' '];
  return results;
};

const sentence = 'good morning';
const result1 = letterPositions(sentence); //
assertArraysEqual(result1['g'], [0, 11], true);
assertArraysEqual(result1['o'], [1, 2, 6], true);