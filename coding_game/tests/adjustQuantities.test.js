const adjustQuantities = require("../adjustQuantities"); // Adjust the path as needed

describe("adjustQuantities", () => {
  it("multiplies quantities correctly for a standard list of ingredients", () => {
    const ingredients = [
      "2 eggs",
      "200 grams of flour",
      "150 grams of sugar",
      "1 liter(s) of milk",
    ];
    const nbPersons = 3;
    const expected = [
      "6 eggs",
      "600 grams of flour",
      "450 grams of sugar",
      "3 liter(s) of milk",
    ];
    expect(adjustQuantities(nbPersons, ingredients)).toEqual(expected);
  });

  it("returns original list for single person", () => {
    const ingredients = [
      "2 eggs",
      "200 grams of flour",
      "150 grams of sugar",
      "1 liter(s) of milk",
    ];
    const nbPersons = 1;
    expect(adjustQuantities(nbPersons, ingredients)).toEqual(ingredients);
  });

  it("handles large nbPersons values", () => {
    const ingredients = ["1 eggs", "100 grams of flour"];
    const nbPersons = 1000;
    const expected = ["1000 eggs", "100000 grams of flour"];
    expect(adjustQuantities(nbPersons, ingredients)).toEqual(expected);
  });

  it("does not alter numbers within product names", () => {
    const ingredients = ["2 20-inch pizzas", "3 300ml soda bottles"];
    const nbPersons = 2;
    const expected = ["4 20-inch pizzas", "6 300ml soda bottles"];
    expect(adjustQuantities(nbPersons, ingredients)).toEqual(expected);
  });

  it("handles empty ingredient list", () => {
    const ingredients = [];
    const nbPersons = 3;
    expect(adjustQuantities(nbPersons, ingredients)).toEqual([]);
  });

});
