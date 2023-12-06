const remainingLeaves = require("../aut_leaves.js");

describe("remainingLeaves", () => {
  test("should return zero for an empty grid", () => {
    expect(remainingLeaves(5, 5, [], "")).toBe(0);
  });

  test("should correctly handle a single gust", () => {
    const leaves = [
      [1, 1, 1],
      [1, 1, 1],
      [1, 1, 1],
    ];
    expect(remainingLeaves(3, 3, leaves, "R")).toBe(6); // Assuming right wind gust removes a row of leaves
  });

  test("should correctly handle multiple gusts", () => {
    const leaves = [
      [2, 2],
      [2, 2],
    ];
    expect(remainingLeaves(2, 2, leaves, "RD")).toBe(2); // Example case
  });

  test("should handle edge cases", () => {
    const leaves = [
      [1, 0],
      [0, 1],
    ];
    expect(remainingLeaves(2, 2, leaves, "L")).toBe(1); // Edge case
  });

  test("should work for maximum size and wind length", () => {
    const maxLeaves = Array(20).fill(Array(20).fill(1));
    const maxWinds = "RRRRRRRRRRRRRRRRRRRR";
    expect(remainingLeaves(20, 20, maxLeaves, maxWinds)).toBeGreaterThan(0); // Example case
  });
});
