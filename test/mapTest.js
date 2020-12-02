const { expect } = require('chai');
const map = require('../map');

describe('#map', () => {

  it("should return array of strings with word added to them", () => {
    const array1 = ['hello', 'hi', 'hey'];
    const results1 = map(array1, word => word + ' there');
    expect(results1).to.deep.equal(['hello there', 'hi there', 'hey there']);
  });

  it("should return array of numbers doubled", () => {
    const array2 = [1, 2, 3];
    const results2 = map(array2, num => num * 2);
    expect(results2).to.deep.equal([2, 4, 6]);
  })

  it("should return empty array no matter what function it takes", () => {
    const array3 = [];
    const results3 = map(array3, word => word[0]);
    expect(results3).to.deep.equal([]);
  })

});