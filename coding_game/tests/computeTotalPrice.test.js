const computeTotalPrice = require("../computeTotalPrice");

describe("computeTotalPrice", () => {
  test("calculates total price without discount", () => {
    expect(computeTotalPrice(2, ["vanilla", "vanilla"])).toBe(4);
  });

  test("applies 10% discount for 2 different flavors", () => {
    expect(computeTotalPrice(10, ["vanilla", "chocolate"])).toBe(18);
  });

  test("applies 20% discount for 3 different flavors", () => {
    expect(computeTotalPrice(5, ["vanilla", "chocolate", "strawberry"])).toBe(
      12
    );
  });

  test("applies 30% discount for 4 different flavors", () => {
    expect(
      computeTotalPrice(4, ["vanilla", "chocolate", "strawberry", "lemon"])
    ).toBe(11);
  });

  test("applies 40% discount for 5 different flavors", () => {
    expect(
      computeTotalPrice(2, [
        "vanilla",
        "chocolate",
        "strawberry",
        "lemon",
        "mint",
      ])
    ).toBe(6);
  });

  test("handles less than 5 flavors in total", () => {
    expect(computeTotalPrice(3, ["vanilla", "chocolate"])).toBe(5);
  });

  test("rounds down floating point results", () => {
    expect(computeTotalPrice(2.5, ["vanilla", "chocolate", "strawberry"])).toBe(
      6
    );
  });
});
