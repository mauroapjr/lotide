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

//////////////////////////////////////////////////////////////////////////

const eqObjects = function (object1, object2) {
  let keys1 = Object.keys(object1);
  let keys2 = Object.keys(object2);
  if (keys1.length === keys2.length) {
    for (let key of keys1) {
      if (object1[key].isArray && object2[key].isArray) {
        eqArrays(object1[key], object2[key]);
      } else if (object1[key] === object2[key]) {
        return true;
      }
    }
  }
  return false;
};

/////////////////////////////////////////////////////////////////////////

const assertObjectsEqual = function (actual, expected) {
  const inspect = require("util").inspect;
  if (eqObjects(actual, expected)) {
    console.log(
      `✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`
    );
  } else {
    console.log(
      `❌ Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`
    );
  }
};

const obj1 = { a: "1", b: 2 };
const obj2 = { b: 2, a: "1" };
assertObjectsEqual(obj1, obj2);
