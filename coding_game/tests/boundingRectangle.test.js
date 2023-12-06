const boundingRectangle = require("../boundingRectangle");

describe("boundingRectangle", () => {
  it("calculates the bounding rectangle for a basic set of points", () => {
    const points = [
      [1, 2],
      [3, 4],
      [5, 6],
    ];
    expect(boundingRectangle(points)).toEqual([1, 2, 4, 4]);
  });

  it("handles minimum number of points", () => {
    const points = [
      [0, 0],
      [2, 2],
    ];
    expect(boundingRectangle(points)).toEqual([0, 0, 2, 2]);
  });

  it("handles negative coordinates", () => {
    const points = [
      [-1, -1],
      [1, 1],
    ];
    expect(boundingRectangle(points)).toEqual([-1, -1, 2, 2]);
  });

  it("handles points aligned vertically", () => {
    const points = [
      [0, 0],
      [0, 5],
    ];
    expect(boundingRectangle(points)).toEqual([0, 0, 0, 5]);
  });

  it("handles points aligned horizontally", () => {
    const points = [
      [0, 0],
      [5, 0],
    ];
    expect(boundingRectangle(points)).toEqual([0, 0, 5, 0]);
  });

  it("handles large numbers", () => {
    const points = [
      [10000, 10000],
      [20000, 20000],
    ];
    expect(boundingRectangle(points)).toEqual([10000, 10000, 10000, 10000]);
  });

  it("handles zero width or height", () => {
    const points = [
      [2, 2],
      [2, 4],
    ];
    expect(boundingRectangle(points)).toEqual([2, 2, 0, 2]);
  });
});
