const without = function(source, itemsToRemove) {
  newArray = [];
  for (let value of source) {
    if (!itemsToRemove.includes(value)) {
      newArray.push(value);
    }
  }
  return newArray;
};

module.exports = without;
