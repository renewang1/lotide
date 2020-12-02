const { expect } = require('chai');
const findKeyByValue = require('../findKeyByValue');

describe('#findKeyByValue', () => {
  const bestTVShowsByGenre = {
    sciFi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama:  "The Wire"
  };
  
  it("should return 'drama' for 'The Wire", () => {
    expect(findKeyByValue(bestTVShowsByGenre, 'The Wire')).to.equal('drama');
  });

  it("should return undefined for value not in the object", () => {
    try {
      findKeyByValue(bestTVShowsByGenre, "That '70s Show");
    } catch (err) {
      expect(err.message).to.equal(undefined);
    }
  });

});

