const { expect } = require('chai');
const takeUntil = require('../takeUntil');

describe('#takeUntil', () => {

  it("should return array containing all until negative number", () => {
    const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
    const results1 = takeUntil(data1, x => x < 0);
    expect(results1).to.deep.equal([1, 2, 5, 7, 2]);
  });

  it("should return array containing all strings until a comma", () => {
    const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
    const results2 = takeUntil(data2, x => x === ',');
    expect(results2).to.deep.equal(["I've", "been", "to", "Hollywood"]);
  });

  it("should return an empty array no matter what callback function is passed", () => {
    const data3 = [];
    const results3 = takeUntil(data3, x => x[0]);
    expect(results3).to.deep.equal([]);
  });
});