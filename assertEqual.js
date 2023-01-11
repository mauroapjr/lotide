const assertEqual = function (actual, expected, result = false) {
  if (actual === expected) {
    if (!result) {
      console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
    }
    return true;
  } else {
    if (!result) {
      console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
    }
    return false;
  }
};
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
