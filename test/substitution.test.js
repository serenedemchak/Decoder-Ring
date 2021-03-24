const {expect} = require("chai")
const substitution = require("../src/substitution.js")


describe("substitution", () => {
    it("should return false if alphabet does not contain unique characters", () => {
        const input = "thinkful"
        const alphabet = "xooqmcgrukswaflnthdjpzibev"
          const expected = false;
          const actual = substitution(input, alphabet);
          expect(actual).to.equal(expected);
    });
  it("should return false if alphabet does not contain exactly 26 characters", () => {
    const input = "thinkful"
    const alphabet = "xoyqmcgrukswaflnthdjpzibe"
      const expected = false;
      const actual = substitution(input, alphabet);
      expect(actual).to.equal(expected);
  });
  it("should return decoded input if encode = false", () => {
    const input = "jrufscpw"
    const alphabet = "xoyqmcgrukswaflnthdjpzibev"
      const expected = "thinkful";
      const actual = substitution(input, alphabet, false);
      expect(actual).to.equal(expected);
  });
  it("should return encooded input if encode = true", () => {
    const input = "thinkful"
    const alphabet = "xoyqmcgrukswaflnthdjpzibev"
      const expected = "jrufscpw";
      const actual = substitution(input, alphabet);
      expect(actual).to.equal(expected);
  });
  it("should return decoded input if encode = false and special characters are involved", () => {
    const input = "y&ii$r&"
    const alphabet = "$wae&zrdxtfcygvuhbijnokmpl"
      const expected = "message";
      const actual = substitution(input, alphabet, false);
      expect(actual).to.equal(expected);
  });
  it("should return encooded input if encode = true and special characters are involved", () => {
    const input = "message"
    const alphabet = "$wae&zrdxtfcygvuhbijnokmpl"
      const expected = "y&ii$r&";
      const actual = substitution(input, alphabet);
      expect(actual).to.equal(expected);
  });
  it("should return encooded input if encode = true and include spaces and ignore capital letters", () => {
    const input = "You are an excellent spy"
    const alphabet = "xoyqmcgrukswaflnthdjpzibev"
      const expected = "elp xhm xf mbymwwmfj dne";
      const actual = substitution(input, alphabet);
      expect(actual).to.equal(expected);
  });
  });