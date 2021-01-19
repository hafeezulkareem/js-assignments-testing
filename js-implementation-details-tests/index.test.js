const { expect } = require("@jest/globals");
const fs = require("fs");
const vm = require("vm");

const jsCode = fs.readFileSync("./index.js", "utf-8");
const htmlCode = fs.readFileSync("./index.html", "utf-8");

describe("JavaScript implementation details tests", () => {
   it("should test whether used addEventListener in the code or not", () => {
      expect(
         jsCode.match(/.addEventListener/) ||
            htmlCode.match(/.addEventListener/) ||
            null
      ).not.toBe(null);
   });
});
