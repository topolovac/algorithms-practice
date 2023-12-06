const computeChecksums = require("../computeChecksums"); // Adjust the path as needed

describe("computeChecksums", () => {
  test("basic functionality", () => {
    expect(computeChecksums([3, 44, 55, 66, 2, 110, 220])).toEqual([165, 74]);
  });

  test("single chunk", () => {
    expect(computeChecksums([1, 50])).toEqual([50]);
  });

  test("multiple chunks including zero-sized chunk", () => {
    expect(computeChecksums([2, 30, 40, 0, 3, 5, 10, 15])).toEqual([70, 0, 30]);
  });

  test("multiple chunks including zero-sized chunk on the end", () => {
    expect(computeChecksums([2, 30, 40, 0, 3, 5, 10, 15, 0])).toEqual([
      70, 0, 30, 0,
    ]);
  });

  test("maximum chunk size", () => {
    const largeChunk = [255, ...new Array(255).fill(1)];
    expect(computeChecksums(largeChunk)).toEqual([255]);
  });

  test("smallest non-zero file", () => {
    expect(computeChecksums([1, 1])).toEqual([1]);
  });

  test("maximum length file", () => {
    const maxLengthFile = new Array(1000).fill(1);
    expect(computeChecksums(maxLengthFile)).toHaveLength(500); // Assuming evenly split chunks
  });
});
