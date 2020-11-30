const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

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