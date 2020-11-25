const letterPositions = function(sentence) {
  const results = {};
  for (i in sentence) {
    if (results[sentence[i]]) {
      results[sentence[i]].push(i);
    } else {
      results[sentence[i]] = [];
      results[sentence[i]].push(i);
    }
  }
  delete results[' '];
  return results;
};

console.log(letterPositions('good morning'))