const spell = require("../spell"); // Adjust the path to your spell function

describe("spell function", () => {
  test("should return an empty list for an empty input list", () => {
    expect(spell([])).toEqual([]);
  });

  test("should correctly reverse a list of even numbers", () => {
    expect(spell([2, 4, 6, 8])).toEqual([8, 6, 4, 2]);
  });

  test("should return an empty list if all numbers are odd", () => {
    expect(spell([1, 3, 5, 7])).toEqual([]);
  });

  test("should reverse the list and filter out odd numbers", () => {
    expect(spell([1, 2, 3, 4])).toEqual([4, 2]);
  });

  test("should correctly handle negative numbers", () => {
    expect(spell([-2, -3, -4, -5])).toEqual([-4, -2]);
  });

  test("should handle a single number in the list", () => {
    expect(spell([2])).toEqual([2]);
    expect(spell([3])).toEqual([]);
  });
});
