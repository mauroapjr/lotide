const assertArraysEqual = function (actual, expected) {
  if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed:${actual} !== ${expected}`);
  } else {
    console.log(`✅✅✅ Assertion Passed:${actual} === ${expected}`);
  }
};

const eqArrays = function (array1, array2) {
  let output = true;
  if (array1.length !== array2.length) return false;
  for (let element = 0; element < array1.length; element += 1) {
    if (Array.isArray(array1[element]) || Array.isArray(array2[element])) {
      output = output && eqArrays(array1[element], array2[element]);
    } else if (array1[element] !== array2[element]) {
      output = output && false;
    }
  }
  return output;
};

const letterPositions = function (sentence) {
  const results = {};
  let index = 0;
  for (const letter of sentence) {
    if (results[letter]) {
      results[letter].push(index);
    } else {
      results[letter] = [index];
    }
    index++;
  }
  console.log(results);
};
assertArraysEqual(letterPositions("hello"), [1]);
