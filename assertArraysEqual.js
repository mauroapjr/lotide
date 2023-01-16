const eqArrays = require("./eqArrays");


const assertArraysEqual = function (arr1, arr2) {
  if (eqArrays(arr1, arr2) === false) {
    //console.log("Assertation failed");
  } else {
    //console.log("Assertation passed");
  } 
};

console.log(assertArraysEqual([1, 2, 3], [1, 2, 3]));

/////////////////////////////////////////////////////////////////////////////

//TEST

// const words = ["ground", "control", "to", "major", "tom"];

// const map = function (array, callback) {
//   const results = [];
//   for (let item of array) {
//     results.push(callback(item));
//   }
//   return results;
// };

// const results1 = map(words, (word) => word[0]);
// console.log(results1);

module.exports = assertArraysEqual;
