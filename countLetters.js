const assertEqual = require('./assertEqual')
const countLetters = function(sentence) {
  const count = {};
  for (const letter of sentence) {
    if (letter in count) {
      count[letter] += 1;
    } else {
      count[letter] = 1;
    }
  }
  return count;
};

module.exports = countLetters;


const test1 = 'hello world';
const result1 = countLetters(test1); //{h: 1, e: 1, l: 3, o: 2, w: 1, r: 1, d: 1};
assertEqual(result1['l'], 3, true);
assertEqual(result1['p'], undefined, true);