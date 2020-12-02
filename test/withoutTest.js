const { expect } = require('chai');
const without = require('../without');

describe('#without', () => {

  it("should return [2, 3] given [1, 2, 3] and [1] as arguments", () => {
    expect(without([1, 2, 3], [1])).to.deep.equal([2, 3]);
  });

  it("should return ['1', '2'] given ['1', '2', '3'] and [1, 2, '3'] as arguments", () => {
    expect(without(['1', '2', '3'], [1, 2, '3'])).to.deep.equal(['1', '2']);
  });

  it("should not alter original array", () => {
    const words = ["hello", "world", "lighthouse"];
    without(words, ["lighthouse"]);
    expect(words).to.deep.equal(["hello", "world", "lighthouse"]);
  });

  it("should return an empty array if empty array is passed", () => {
    expect(without([], [1, 2, 3])).to.deep.equal([]);
  });

});