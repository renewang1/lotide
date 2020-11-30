const assertArraysEqual = require('./assertArraysEqual');

const middle = function(array) {
  let middle = [];
  if (array.length <= 2) {
    return middle;
  } else if (array.length % 2 === 0) {
    middle = array.slice(array.length / 2 - 1, array.length / 2 + 1);
    return middle;
  } else if (array.length % 2 !== 0) {
    middle = array.slice(Math.floor(array.length / 2), Math.floor(array.length / 2) + 1);
    return middle;
  }
};

module.exports = middle;
