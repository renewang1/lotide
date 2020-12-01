const assert = require('chai').assert;
const { expect } = require('chai');
const countLetters = require('../countLetters');

describe('#countLetters', () => {
  it("should return 3 l characters for 'hello world'", () => {
    const test = 'hello world';
    expect(countLetters(test)['l']).to.equal(3);
  });

  it("should return undefined for a character not in string", () => {
    const test = 'hello world';
    try {
      countLetters(test)['p']
    } catch (err) {
      assert.equal((err.message), undefined);
    }
  });
});
