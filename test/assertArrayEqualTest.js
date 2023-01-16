const assertArraysEqual = require("../assertArraysEqual");
const assert = require("chai").assert;


describe("#head", () => {
  it("return true if arrays are equal", () => {
    assert.strictEqual(assertArraysEqual([1, 2, 3], [1, 2, 3]));
  });
  it("returns false if arrays are different ", () => {
    assert.strictEqual(assertArraysEqual([1, 2, 3][3, 2, 1]));
  });
  it("returns false if arrays are different ", () => {
    assert.strictEqual(assertArraysEqual([1, 2, 3, 4][3, 2, 1]));
  });
});
