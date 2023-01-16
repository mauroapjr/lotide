const assertEqual = require("../assertEqual");
const tail = require("../tail");
const assert = require("chai").assert;

// tail(words); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3);

describe("#head", () => {
  const words = ["Yo Yo", "Lighthouse", "Labs"];
  it("returns 3 for words.length", () => {
    assert.strictEqual(words.length, 3);
  });
  it("returns 2 for tail(words).length", () => {
    assert.strictEqual(tail(words).length, 2);
  });
  it("returns ['Lighthouse', 'Labs'] for tail(words)", () => {
    assert.deepEqual(tail(words), ["Lighthouse", "Labs"]);
  });
});
