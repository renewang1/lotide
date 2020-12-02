const { expect } = require('chai');
const countOnly = require('../countOnly');

describe('#countOnly', () => {
  const firstNames = [
    "Karl",
    "Salima",
    "Agouhanna",
    "Fang",
    "Kavith",
    "Jason",
    "Salima",
    "Fang",
    "Joe"
  ];
  const result = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

  it("should return 1 with an array with one instance of name", () => {
    expect(result['Jason']).to.equal(1);
  });

  it("should return 2 with an array with one instance of name", () => {
    expect(result['Fang']).to.equal(2);
  });

  it("should return undefined with an array with no instances of name but called", () => {
    try {
      result['Karima'];
    } catch (err) {
      expect(err.message).to.equal(undefined);
    }
  });

  it("should return undefined with an array with one instance of name but not called", () => {
    try {
      result['Aghouhanna'];
    } catch (err) {
      expect(err.message).to.equal(undefined);
    }
  });
});

// const firstNames = [
//   "Karl",
//   "Salima",
//   "Agouhanna",
//   "Fang",
//   "Kavith",
//   "Jason",
//   "Salima",
//   "Fang",
//   "Joe"
// ];

// const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

// assertEqual(result1["Jason"], 1);
// assertEqual(result1["Karima"], undefined);
// assertEqual(result1["Fang"], 2);
// assertEqual(result1["Agouhanna"], undefined);
