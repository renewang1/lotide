const findKey = function(object, callback) {
  let found = undefined;
  for (let item in object) {
    if (callback(object[item])) {
      found = item;
      return found;
    }
  }
  return found;
};

module.exports = findKey;