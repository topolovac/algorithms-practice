const applyFilter = require("../filter.js"); // Adjust the path accordingly

describe("applyFilter", () => {
  describe("Inversion Filter", () => {
    test("should correctly invert an image", () => {
      const color = [
        [0, 255],
        [255, 0],
      ];
      const expected = [
        [255, 0],
        [0, 255],
      ];
      expect(applyFilter(2, 2, 1, color)).toEqual(expected);
    });

    test("should correctly invert a single row image", () => {
      const color = [[0, 255, 100]];
      const expected = [[100, 255, 0]];
      expect(applyFilter(3, 1, 1, color)).toEqual(expected);
    });

    test("should correctly invert an image with odd number of columns", () => {
      const color = [
        [0, 255, 100],
        [100, 50, 0],
      ];
      const expected = [
        [100, 255, 0],
        [0, 50, 100],
      ];
      expect(applyFilter(3, 2, 1, color)).toEqual(expected);
    });
  });

  describe("blurFilter", () => {
    test("correctly blurs an image", () => {
      const image = [
        [10, 20, 30],
        [40, 50, 60],
        [70, 80, 90],
      ];
      const expected = [
        [37, 38, 43],
        [46, 50, 54],
        [57, 62, 63],
      ];
      expect(applyFilter(3, 3, 2, image)).toEqual(expected);
    });

    test("handles edge pixels correctly", () => {
      const image = [
        [10, 20],
        [30, 40],
      ];
      const expected = [
        [30, 27],
        [23, 20],
      ];
      expect(applyFilter(2, 2, 2, image)).toEqual(expected);
    });
  });
});
