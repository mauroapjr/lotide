const assertEqual = require("./assertEqual");

const eqArrays = function (arr1, arr2) {
  for (i = 0; i <= arr1; i++) {
    for (x = 0; x <= arr2; x++) {
      if (arr1[i].length !== arr2[x].length) {
        return false;
      }
      if (arr1[i] === arr2[x]) {
        return true;
      }
    }
  }
};

//assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS

eqArrays([1, 2, 3], [1, 2, 3]); // => true
eqArrays([1, 2, 3], [3, 2, 1]); // => false

eqArrays(["1", "2", "3"], ["1", "2", "3"]); // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]); // => false

module.exports = eqArrays;
