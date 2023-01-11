const eqArrays = (array1, array2) => {
  let isGood = true;
  if (array1.length != array2.length) {
    isGood = false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      isGood = false;
    }
  }
  if (isGood) {
    console.log("Your Arrays are Equal!");
  } else {
    console.log("Your Arrays are not the same.");
  }
};

const assertArraysEqual = function (arr1, arr2) {
  if (eqArrays(arr1, arr2) === false) {
    console.log("Assertation failed");
  } else {
    console.log("Assertation passed");
  }
};

console.log(assertArraysEqual([1, 2, 3], [1, 2, 3]));

const middle = function (array) {
  if (array.length <= 2) {
    return [];
  } else if (array.length % 2 === 0) {
    return [array.length / 2, array.length / 2 + 1];
  } else {
    return array[Math.floor(array.length / 2)];
  }
};
console.log(middle([1])); // => []
console.log(middle([1, 2])); // => []
console.log(middle([1, 2, 3])); // => [2]
console.log(middle([1, 2, 3, 4, 5])); // => [3]
console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]
