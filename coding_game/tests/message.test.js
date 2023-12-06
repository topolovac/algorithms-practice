const rebuildMessage = require("../message");

describe("Message Rebuilding Tests", () => {
  it("should rebuild a simple message correctly", () => {
    const parts = ["Ab", "bcZ"];
    expect(rebuildMessage(parts)).toBe("AbcZ");
  });

  it("should handle multiple parts", () => {
    const parts = ["Abc", "cDe", "eFgZ"];
    expect(rebuildMessage(parts)).toBe("AbcDeFgZ");
  });

  it("should rebuild a long message correctly", () => {
    const parts = ["Aaaaaaaaaa", "aaaaaaaaab", "bbbbbbbbbc", "ccccccccccZ"];
    let expectedMessage = "Aaaaaaaaaa";
    expectedMessage += "aaaaaaaaab".substring(1);
    expectedMessage += "bbbbbbbbbc".substring(1);
    expectedMessage += "ccccccccccZ".substring(1);

    expect(rebuildMessage(parts)).toBe(expectedMessage);
  });

  it("should handle a single part", () => {
    const parts = ["A...Z"];
    expect(rebuildMessage(parts)).toBe("A...Z");
  });

  it("should handle complex rebuild scenarios", () => {
    const parts = ["A.........*", "*====#", "#______X", "X-+-+-+-+-+-Z"];
    expect(rebuildMessage(parts)).toBe("A.........*====#______X-+-+-+-+-+-Z");
  });

  // Additional test cases can be added for more complex or edge scenarios.
  // Note: The invalid input tests are omitted since the problem constraints guarantee valid inputs.
});
