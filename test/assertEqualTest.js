const assertEqual = require("../assertEqual");
const eqArrays = require("../eqArrays");
const assert = require("chai").assert;

describe("#head", () => {
  it("returns PASS if it is equal", () => {
    assert.strictEqual(assertEqual(1, 1), 1);
  });
  it("returns PASS if it is equal ", () => {
    assert.strictEqual(assertEqual(eqArrays([1, 2, 3], [1, 2, 3])));
  });
});
