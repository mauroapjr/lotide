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

// Test Case: Check the original array

const tail = function (array) {
  return array.slice(1);
};
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!
