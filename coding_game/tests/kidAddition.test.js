const compute = require("../kidAddition"); // adjust the path as necessary

describe("Kid Addition Check", () => {
  test('Correct addition returns "ok"', () => {
    expect(compute(123, 672, 795)).toBe("ok");
  });

  test("Incorrect unit digit", () => {
    expect(compute(123, 672, 794)).toBe("0");
  });

  test("Incorrect tens digit", () => {
    expect(compute(123, 672, 785)).toBe("1");
  });

  test("Incorrect hundreds digit", () => {
    expect(compute(123, 672, 895)).toBe("2");
  });

  test("Different number of digits in result", () => {
    expect(compute(12, 77, 190)).toBe("0");
  });

  test("All digits wrong but only first incorrect digit identified", () => {
    expect(compute(123, 456, 100)).toBe("0");
  });

  test("Zero input values", () => {
    expect(compute(0, 0, 0)).toBe("ok");
  });
});
