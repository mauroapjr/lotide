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

const assertEqual = function (actual, expected) {
  if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed:${actual} !== ${expected}`);
  } else {
    console.log(`✅✅✅ Assertion Passed:${actual} === ${expected}`);
  }
};
//assertEqual("Lighthouse Labs", "Bootcamp");
//assertEqual(1, 1);

const eqObjects = function (object1, object2) {
  if (Object.keys(object1) !== Object.keys(object2).length) return false;
  for (const key in object1) {
    if (!object2[key]) return false;
    if (!eqArrays(object1[key], object2[key]));
    return false;
  }
  return true;
};

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
eqObjects(shirtObject, anotherShirtObject); // => true

const longSleeveShirtObject = {
  size: "medium",
  color: "red",
  sleeveLength: "long",
};
eqObjects(shirtObject, longSleeveShirtObject); // => false

// const eqObjects = function (object1, object2) {
//   if (Object.keys(object1).length !== Object.keys(object2).length) {
//     return false;
//   }
//   for (let key of Object.keys(object1)) {
//     if (Object.values(object1) === Object.values(object2)) {
//       return false;
//     }
//   }
//   return true;
// };

// const shirtObject = { color: "red", size: "medium" };
//Object.keys(shirtObject); // =>
//return;
// }
// for (let key of Object.keys(object1)) {
//   if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
//     if (!eqArrays(object1[key], object2[key])) {
//       return false;
//     }
//   }
// }
// return true;
