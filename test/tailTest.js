const assertEqual = require("../assertEqual");
const tail = require("../tail");
const assert = require("chai").assert;

// tail(words); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3);

describe("#head", () => {
  it("return true if the function it IS cutting the first element", () => {
    assert.strictEqual(assertEqual(tail(["Yo Yo", "Lighthouse", "Labs"])));
  });
  it("return false if the function it is NOT cutting the first element", () => {
    assert.strictEqual(assertEqual(tail(["Yo Yo", "Lighthouse", "Labs"])));
  });
});
