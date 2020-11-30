const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {

  it('does not change the original array', () => {
    const testArray = [1, 2, 3, 4];
    middle(testArray);
    assert.deepEqual(testArray, [1, 2, 3, 4], true); //Should PASS
  });

  it('returns [2] for [1, 2, 3]', () => {
    const testArray2 = [1, 2, 3];
    assert.deepEqual(middle(testArray2), [2], true); //Should PASS
  });

  it('returns [] for [1, 2]', () => {
    const testArray3 = [1, 2];
    assert.deepEqual(middle(testArray3), [], true); //Should PASS
  });

  it('returns [] for [1]', () => {
    const testArray4 = [1];
    assert.deepEqual(middle(testArray4), [], true); //Should PASS
  });

  it('returns [] for []', () => {
    const testArray5 = [];
    assert.deepEqual(middle(testArray5), [], true); //Should PASS
  });
});







