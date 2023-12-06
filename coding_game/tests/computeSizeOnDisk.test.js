const computeSizeOnDisk = require("../computeSizeOnDisk");

describe("computeSizeOnDisk", () => {
  // Basic Functionality Tests
  test("file size is a multiple of cluster size", () => {
    expect(computeSizeOnDisk(512, 1024)).toBe(1024);
  });

  test("file size is less than cluster size", () => {
    expect(computeSizeOnDisk(512, 500)).toBe(512);
  });

  test("file size requires multiple clusters", () => {
    expect(computeSizeOnDisk(512, 1500)).toBe(1536);
  });

  // Boundary Tests
  test("minimum cluster size", () => {
    expect(computeSizeOnDisk(1, 500)).toBe(500);
  });
});
