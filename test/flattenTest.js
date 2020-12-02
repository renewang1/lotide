const { expect } = require('chai');
const flatten = require('../flatten');

describe('#flatten', () => {
  const testArray = [1, 2, [1, 2, 3]];

  it("should return [1, 2, 1, 2, 3] for [1, 2, [1, 2, 3]]", () => {
    expect(flatten(testArray)).to.deep.equal([1, 2, 1, 2, 3]);
  });
});
