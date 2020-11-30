const assert = require('chai').assert;
const tail = require('../tail');


describe("#tail", () => {
  
  it("returns [2, 3] for [1, 2, 3]", () => {
    assert.deepEqual(tail([1, 2, 3]), [2, 3]);
  });
  
  it('does not change the original array', () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    tail(words); // no need to capture the return value since we are not checking it
    assert.strictEqual(words.length, 3); // original array should still have 3 elements!
  });

});
