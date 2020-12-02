
const results1 = map(words, word => word[0]);
console.log(results1);

const array1 = ['hello', 'hi', 'hey'];
const results2 = map(array1, word => word + ' there');
assertArraysEqual(results2, ['hello there', 'hi there', 'hey there']);

const array2 = [1, 2, 3];
const results3 = map(array2, num => num * 2);
assertArraysEqual(results3, [2, 4, 6]);

const array3 = [];
const results4 = map(array3, word => word[0]);
assertArraysEqual(results4, []);
