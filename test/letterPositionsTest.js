const { expect } = require('chai');
const letterPositions = require('../letterPositions');

describe('#letterPositions', () => {
  const sentence = 'good morning';
  const result = letterPositions(sentence);

  it("should return [0, 11] for ['g'] in 'good morning", () => {
    expect(result['g']).to.deep.equal([0, 11]);
  });

  it("should return [1, 2, 6] for ['o'] in 'good morning", () => {
    expect(result['o']).to.deep.equal([1, 2, 6]);
  });
});
