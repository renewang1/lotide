const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🛑🛑🛑 Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`✅✅✅ Assertion failed: ${actual} !== ${expected}`);
  }
};

assertEqual("Bootcamp", "Bootcamp");
assertEqual(2, 1);