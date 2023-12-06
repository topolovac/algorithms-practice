const compute = require("../computeKbMb"); // Replace with your actual file path

describe("compute function tests", () => {
  test("returns the original number of bytes if less than 1024 bytes", () => {
    expect(compute(500)).toBe("500");
  });

  test('converts to KiB and appends "KiB" if exactly 1024 bytes', () => {
    expect(compute(1024)).toBe("1 KiB");
  });

  test('converts to KiB and appends "KiB" if more than 1024 bytes but less than 1048576 bytes', () => {
    expect(compute(1500)).toBe("1 KiB");
  });

  test('converts to MiB and appends "MiB" if exactly 1048576 bytes', () => {
    expect(compute(1048576)).toBe("1 MiB");
  });

  test('converts to MiB and appends "MiB" if more than 1048576 bytes', () => {
    expect(compute(2097152)).toBe("2 MiB");
  });
});
