const decode = require("../decode");
describe("decode function tests", () => {
  it("should correctly decode a simple scrambled message", () => {
    const knownWords = ["hello", "world"];
    const message = "hlelo wlrod";
    expect(decode(knownWords, message)).toBe("hello world");
  });

  it("should handle single letter words correctly", () => {
    const knownWords = ["i", "a", "m"];
    const message = "i a m";
    expect(decode(knownWords, message)).toBe("i a m");
  });

  it("should handle maximum known words limit", () => {
    const knownWords = [
      "one",
      "two",
      "three",
      "four",
      "five",
      "six",
      "seven",
      "eight",
      "nine",
      "ten",
      "eleven",
      "twelve",
      "thirteen",
      "fourteen",
      "fifteen",
      "sixteen",
      "seventeen",
      "eighteen",
      "nineteen",
      "twenty",
    ];
    const message = "oen tewnty tehre";
    expect(decode(knownWords, message)).toBe("one twenty three");
  });

  it("should handle a message of maximum length", () => {
    const knownWords = ["maximum", "length", "test", "message"];
    const message = "mxiamum lgtehn tset msesage";
    expect(decode(knownWords, message)).toBe("maximum length test message");
  });

  it("should return an empty string for an empty message", () => {
    const knownWords = ["any", "word"];
    const message = "";
    expect(decode(knownWords, message)).toBe("");
  });


  it("should correctly decode a message where all words are scrambled", () => {
    const knownWords = ["every", "word", "is", "scrambled"];
    const message = "evrey wrod si srbclmaed";
    expect(decode(knownWords, message)).toBe("every word is scrambled");
  });

  it("should correctly handle a message where no words are scrambled", () => {
    const knownWords = ["none", "of", "these", "are", "scrambled"];
    const message = "none of these are scrambled";
    expect(decode(knownWords, message)).toBe("none of these are scrambled");
  });


  it("should perform efficiently under maximum load", () => {
    const knownWords = Array.from({ length: 20 }, (_, i) => `word${i + 1}`);
    const message = knownWords
      .map((word) =>
        word
          .split("")
          .sort(() => 0.5 - Math.random())
          .join("")
      )
      .join(" ");
    const start = performance.now();
    decode(knownWords, message);
    const end = performance.now();
    expect(end - start).toBeLessThan(1000);
  });
});
