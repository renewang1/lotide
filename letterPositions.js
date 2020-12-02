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
