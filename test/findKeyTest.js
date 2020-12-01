const { expect } = require('chai');
const findKey = require('../findKey');

describe('#findKey', () => {
  const test = {
    "Blue Hill": { stars: 1 },
    "Akaleri":   { stars: 3 },
    "noma":      { stars: 2 },
    "elBulli":   { stars: 3 },
    "Ora":       { stars: 2 },
    "Akelarre":  { stars: 3 }
  };

  it("should return first key:value that fits criteria if there are more than one that fit criteria", () => {
    const result = findKey(test, x => x.stars === 2);
    expect(result).to.equal('noma');
  });

  it("should return first key:value that fits criteria if there is only one that fits criteria", () => {
    const result = findKey(test, x => x.stars === 1);
    expect(result).to.equal('Blue Hill');
  });

  it("should return undefined if no key:value fits criteria", () => {
    try{
      const result = findKey(test, x => x.stars === 0);
    } catch (err) {
      expect(err.message).to.equal(undefined);
    }
  });
});