const assertEqual = require("../assertEqual");
const eqArrays = require("../eqArrays");
const assert = require("chai").assert;

//assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
describe("#head", () => {
  it("return true if arrays are equal", () => {
    assert.strictEqual(eqArrays([1, 2, 3], [1, 2, 3]));
  });
  it("returns false if arrays are different ", () => {
    assert.strictEqual(eqArrays([1, 2, 3][(3, 2, 1)]));
  });
  it("returns false if arrays are different ", () => {
    assert.strictEqual(eqArrays([1, 2, 3, 4][(3, 2, 1)]));
  });
});
