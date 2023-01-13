const eqArrays = function (arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

/////////////////////////////////////////////////////////////////////////////

const assertArraysEqual = function (arr1, arr2) {
  if (eqArrays(arr1, arr2) === false) {
    console.log("Assertation failed");
  } else {
    console.log("Assertation passed");
  }
};

/////////////////////////////////////////////////////////////////////////////

const takeUntil = function (array, callback) {
  for (let item of array) {
    if (callback(item)) {
      return array.slice(0, array.indexOf(item));
    }
  }
};
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, (x) => x < 0);
console.log(results1);
