const head = require("./head");
const tail = require("./tail");
const middle = require("./middle");
const eqArrays = require("./eqArrays");
const assertEqual = require("./assertEqual");
const assertArraysEqual = require("./assertArraysEqual");
const assert = require("chai").assert;

module.exports = {
  eqArrays,
  assertEqual,
  assertArraysEqual,
  head,
  tail,
  middle,
};
