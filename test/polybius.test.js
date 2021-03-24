const {expect} = require("chai")
const polybius = require("../src/polybius.js")


describe("polybius", () => {
    it("should return false if number of characters excluding spaces are not even when decoding", () => {
          const input = "44324233521254134"
          const expected = false;
          const actual = polybius(input, false);
          expect(actual).to.equal(expected);
    });
  it("should return encoded input if encode = true", () => {
          const input = "thinkful"
          const expected = "4432423352125413";
          const actual = polybius(input);
          expect(actual).to.equal(expected);
  });
  it("should return encoded input if encode = true, ignoring capital letters and including spaces", () => {
         const input = "Hello world"
         const expected = "3251131343 2543241341";
         const actual = polybius(input);
         expect(actual).to.equal(expected); 
  });
  it("should return decoded input if encode = false including spaces", () => {
          const input = "3251131343 2543241341"
          const expected = "hello world";
          const actual = polybius(input, false);
          expect(actual).to.equal(expected); 
  });
  it("should return decoded input if encode = false and include (i/j)", () => {
          const input = "4432423352125413"
          const expected = "th(i/j)nkful";
          const actual = polybius(input, false);
          expect(actual).to.equal(expected); 
  });
  });