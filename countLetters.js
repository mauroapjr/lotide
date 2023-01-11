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
  }
};

const countLetters = function (result) {
  let letterCount = {};
  for (letter of result.split(" ").join("")) {
    if (!letterCount[letter]) {
      letterCount[letter] = 0;
    }
    letterCount[letter]++;
  }
  return letterCount;
};

console.log(countLetters("lighthouse in the house"));
