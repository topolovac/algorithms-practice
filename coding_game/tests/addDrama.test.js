const addDrama = require("../addDrama");

describe("addDrama", () => {
  test("adds one exclamation mark and changes periods to exclamation marks", () => {
    expect(addDrama("Hello! World.")).toBe("Hello!! World!");
  });

  test("correctly handles multiple consecutive exclamation marks", () => {
    expect(addDrama("Wow!!! Amazing...")).toBe("Wow!!!! Amazing!!!");
  });

  test("works with a mix of characters", () => {
    expect(addDrama("Hi! How are you? I am fine.")).toBe(
      "Hi!! How are you? I am fine!"
    );
  });

  test("no change for string without periods or exclamation marks", () => {
    expect(addDrama("Hello World")).toBe("Hello World");
  });

  test("handles empty string", () => {
    expect(addDrama("")).toBe("");
  });

  test("handles strings with special characters", () => {
    expect(addDrama("#$%^&*()")).toBe("#$%^&*()");
  });
});
