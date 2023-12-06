const computeBloodGenes = require("../computeBloodGenes.js"); // Adjust the path accordingly

describe("computeBloodGenes function", () => {
  // Both parents have the same phenotype
  test("both parents A, child A", () => {
    expect(computeBloodGenes("A", "A", "A")).toEqual([
      ["AA", "AA"],
      ["AA", "AO"],
      ["AO", "AA"],
      ["AO", "AO"],
    ]);
  });

  test("both parents B, child B", () => {
    expect(computeBloodGenes("B", "B", "B")).toEqual([
      ["BB", "BB"],
      ["BB", "BO"],
      ["BO", "BB"],
      ["BO", "BO"],
    ]);
  });

  test("both parents O, child O", () => {
    expect(computeBloodGenes("O", "O", "O")).toEqual([["OO", "OO"]]);
  });

  test("both parents AB, child AB", () => {
    expect(computeBloodGenes("AB", "AB", "AB")).toEqual([["AB", "AB"]]);
  });

  // Different phenotypes for parents
  test("first parent AB, second parent A, child A", () => {
    expect(computeBloodGenes("AB", "A", "A")).toEqual([
      ["AB", "AA"],
      ["AB", "AO"],
    ]);
  });

  test("first parent A, second parent O, child O", () => {
    expect(computeBloodGenes("A", "O", "O")).toEqual([["AO", "OO"]]);
  });

  test("first parent B, second parent AB, child A", () => {
    expect(computeBloodGenes("B", "AB", "A")).toEqual([["BO", "AB"]]);
  });

  test("first parent AB, second parent O, child B", () => {
    expect(computeBloodGenes("AB", "O", "B")).toEqual([["AB", "OO"]]);
  });

  // Impossible combinations
  test("impossible combination (first parent O, second parent AB, child A)", () => {
    expect(computeBloodGenes("O", "AB", "O")).toEqual([["--", "--"]]);
  });

  test("impossible combination (first parent A, second parent O, child AB)", () => {
    expect(computeBloodGenes("A", "O", "AB")).toEqual([["--", "--"]]);
  });
});
