const without = function(source, itemsToRemove) {
  let newArray = [];
  for (let value of source) {
    if (!itemsToRemove.includes(value)) {
      newArray.push(value);
    }
  }
  return newArray;
};

module.exports = without;
