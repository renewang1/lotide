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