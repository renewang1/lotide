
module.exports = letterPositions;

const sentence = 'good morning';
const result1 = letterPositions(sentence); //
assertArraysEqual(result1['g'], [0, 11], true);
assertArraysEqual(result1['o'], [1, 2, 6], true);