const assertArraysEqual = require("../assertArraysEqual");
const middle = require("../middle");
const assert = require("chai").assert;
// assertArraysEqual(middle([1])); // => []
// assertArraysEqual(middle([1, 2])); // => []
// assertArraysEqual(middle([1, 2, 3])); // => [2]

// assertArraysEqual(middle([1, 2, 3, 4, 5])); // => [3]
// assertArraysEqual(middle([1, 2, 3, 4])); // => [2, 3]
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]

describe("#head", () => {
  it("return false if there is < than 2 numbers", () => {
    assert.strictEqual(assertArraysEqual(middle([1])));
  });
  it("return false if there is < than 2 numbers", () => {
    assert.strictEqual(assertArraysEqual(middle([1, 2])));
  });
  it("return true if there is < than 2 numbers and return the middle number", () => {
    assert.strictEqual(assertArraysEqual(middle([1, 2, 3])));
  });
  it("return true if there is < than 2 numbers and return the middle number", () => {
    assert.strictEqual(assertArraysEqual(middle([1, 2, 3, 4, 5])));
  });
  it("return true if there is an even numbers and return the 2 middle numbers", () => {
    assert.strictEqual(assertArraysEqual(middle([1, 2, 3, 4])));
  });
  it("return true if there is an even numbers and return the 2 middle numbers", () => {
    assert.strictEqual(assertArraysEqual(middle([1, 2, 3, 4, 5, 6])));
  });
});
