const assertEqual = function (actual, expected) {
  if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed:${actual} !== ${expected}`);
  } else {
    console.log(`✅✅✅ Assertion Passed:${actual} === ${expected}`);
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
