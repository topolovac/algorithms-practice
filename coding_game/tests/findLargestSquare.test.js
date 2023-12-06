const { findLargestSquare, getSquareSize } = require("../findLargestSquare.js");

describe("findLargestSquare", () => {
  test("finds the largest square in a matrix with mixed values", () => {
    const matrix = [
      [1, 0, 1, 1, 1],
      [1, 1, 1, 1, 0],
      [1, 1, 1, 0, 0],
      [1, 1, 1, 1, 1],
      [0, 0, 1, 1, 1],
    ];
    expect(findLargestSquare(matrix)).toBe(3);
  });

  test("returns 0 for a matrix with no 1s", () => {
    const matrix = [
      [0, 0],
      [0, 0],
    ];
    expect(findLargestSquare(matrix)).toBe(0);
  });

  test("handles a matrix that is entirely 1s", () => {
    const matrix = [
      [1, 1],
      [1, 1],
    ];
    expect(findLargestSquare(matrix)).toBe(2);
  });

  test("handles minimum size matrix", () => {
    const matrix = [[1]];
    expect(findLargestSquare(matrix)).toBe(1);
  });

  // This test might be computationally intensive
  test("handles maximum size matrix", () => {
    const matrix = Array(100).fill(Array(100).fill(1));
    expect(findLargestSquare(matrix)).toBe(100);
  });

  test("returns 0 for an empty matrix", () => {
    const matrix = [];
    expect(findLargestSquare(matrix)).toBe(0);
  });
});

describe("getSquareSize", () => {
  test("returns 0 for an empty matrix", () => {
    expect(getSquareSize([], 0, 0)).toBe(0);
  });

  test("returns correct size for a single row matrix", () => {
    const matrix = [[true]];
    expect(getSquareSize(matrix, 0, 0)).toBe(1);
  });

  test("returns correct size for a single column matrix", () => {
    const matrix = [[true], [true]];
    expect(getSquareSize(matrix, 0, 0)).toBe(1);
  });

  test("returns correct size for a regular matrix", () => {
    const matrix = [
      [true, true, false],
      [true, true, false],
      [false, false, false],
    ];
    expect(getSquareSize(matrix, 0, 0)).toBe(2);
  });

  test("full matrix", () => {
    const matrix = [
      [1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1],
    ];

    expect(getSquareSize(matrix, 0, 1)).toBe(5);
  });

  test("complex matrix", () => {
    const matrix = [
      [1, 0, 1, 1, 1],
      [1, 1, 1, 1, 0],
      [1, 1, 1, 0, 0],
      [1, 1, 1, 1, 1],
      [0, 0, 1, 1, 1],
    ];

    expect(getSquareSize(matrix, 0, 1)).toBe(3);
  });

  test("complex matrix 2", () => {
    const matrix = [
      [1, 0, 1, 1, 1],
      [1, 1, 1, 1, 0],
      [1, 1, 1, 0, 0],
      [1, 1, 1, 1, 1],
      [0, 0, 1, 1, 1],
    ];
    expect(getSquareSize(matrix, 0, 0)).toBe(1);
  });
});
