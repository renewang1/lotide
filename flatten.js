const flatten = function(array) {
  let newArray = [];
  for (let value of array) {
    if (Array.isArray(value)) {
      for (let item of value) {
        newArray.push(item);
      }
    } else {
      newArray.push(value);
    }
  }
  return newArray;
};

module.exports = flatten;
