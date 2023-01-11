const assertEqual = function (actual, expected, result = false) {
  if (actual === expected) {
    if (!result) {
      //console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
    }
    return true;
  } else {
    if (!result) {
      //console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
    }
    return false;
  }
};
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function (allItems, itemsToCount) {
  const results = {};

  for (const item of allItems) {
    if (itemsToCount[item]) {
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
    console.log(item);
  }
  return results;
};

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe",
];

const result1 = countOnly(firstNames, {
  Jason: true,
  Karima: true,
  Fang: true,
  Agouhanna: false,
});

console.log(assertEqual(result1["Jason"], 1));
console.log(assertEqual(result1["Karima"], undefined));
console.log(assertEqual(result1["Fang"], 2));
console.log(assertEqual(result1["Agouhanna"], undefined));
