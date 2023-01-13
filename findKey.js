const assertEqual = function (actual, expected) {
  if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed:${actual} !== ${expected}`);
  } else {
    console.log(`✅✅✅ Assertion Passed:${actual} === ${expected}`);
  }
};

///////////////////////////////////////////////////////////////////////////

var findKeyIn = {
  "Blue Hill": { stars: 1 },
  Akaleri: { stars: 3 },
  noma: { stars: 2 },
  elBulli: { stars: 3 },
  Ora: { stars: 2 },
  Akelarre: { stars: 3 },
};

var findKey = function (object, callback) {
  for (var item in object) {
    if (callback(object[item])) {
      return item;
    }
  }

  return undefined;
};

var found = findKey(findKeyIn, (item) => item.stars === 2);
console.log(found);

assertEqual(found, "noma");
