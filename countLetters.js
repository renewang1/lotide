const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(sentence) {
  const count = {};
  for (letter of sentence) {
    if (letter in count) {
      count[letter] += 1;
    } else {
      count[letter] = 1;
    }
  }
  return count;
}


const test1 = 'hello world';
const result1 = countLetters(test1); //{h: 1, e: 1, l: 3, o: 2, w: 1, r: 1, d: 1};
assertEqual(result1['l'], 3, true);
assertEqual(result1['p'], undefined, true);