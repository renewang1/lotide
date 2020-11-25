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


console.log(countLetters('LHL'))
