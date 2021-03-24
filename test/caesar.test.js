const {expect} = require("chai")
const caesar = require("../src/caesar.js")


describe("caesar", () => {
    it("should return false if shift does not exist", () => {
        const input = "thinkful"
        const shift = ""
          const expected = false;
          const actual = caesar(input, shift);
          expect(actual).to.equal(expected);
    });
  it("should return false if shift is zero", () => {
        const input = "thinkful"
        const shift = 0
          const expected = false;
          const actual = caesar(input, shift);
          expect(actual).to.equal(expected);
  });
  it("should return false if shift is less than -25", () => {
        const input = "thinkful"
        const shift = -26
          const expected = false;
          const actual = caesar(input, shift);
          expect(actual).to.equal(expected);
  });
  it("should return false if shift is greater than 25", () => {
        const input = "thinkful"
        const shift = 26
          const expected = false;
          const actual = caesar(input, shift);
          expect(actual).to.equal(expected);
  });
  it("should return decoded input if encode = false", () => {
        const input = "wklqnixo"
        const shift = 3
          const expected = "thinkful";
          const actual = caesar(input, shift, false);
          expect(actual).to.equal(expected);
  });
  it("should return encoded input if encode = true and shift is a negative number", () => {
    const input = "thinkful"
    const shift = -3
      const expected = "qefkhcri";
      const actual = caesar(input, shift);
      expect(actual).to.equal(expected);
  });
  it("should return encooded input if encode = true", () => {
        const input = "thinkful"
        const shift = 3
          const expected = "wklqnixo";
          const actual = caesar(input, shift);
          expect(actual).to.equal(expected);
  });
  it("should return encooded input if encode = true, include spaces, special characters and ignore capital letters", () => {
        const input = "This is a secret message!"
        const shift = 8
          const expected = "bpqa qa i amkzmb umaaiom!";
          const actual = caesar(input, shift);
          expect(actual).to.equal(expected);
  });
  it("should return decooded input if encode = false, include spaces, special characters and ignore capital letters", () => {
    const input = "bpqa qa i amkzmb umaaiom!"
    const shift = 8
      const expected = "this is a secret message!";
      const actual = caesar(input, shift, false);
      expect(actual).to.equal(expected);
});
  });