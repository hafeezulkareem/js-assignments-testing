const { expect } = require("@jest/globals");
const fs = require("fs");
const vm = require("vm");

const code = fs.readFileSync("./index.js", "utf-8");

describe("JavaScript implementation details tests", () => {
   it("should test whether used addEventListener in the code or not", () => {
      expect(code.match(/.addEventListener/) || null).not.toBe(null);
   });
});
