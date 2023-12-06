const findHiggs = require("../findHiggs.js"); // Adjust the path as needed.

describe("findHiggs Function", () => {
  test("Identifies closest particles correctly", () => {
    const particles = [
      [3, 2],
      [-4, -1],
      [1, -1],
      [8, 1],
      [0, 5],
    ];
    expect(findHiggs(particles)).toEqual([0, 2]);
  });

  test("Handles 1000 input size", () => {
    const particles = generateLargeInput(1000); // A helper function to generate a large input.
    const startTime = Date.now();
    findHiggs(particles);
    const endTime = Date.now();
    expect(endTime - startTime).toBeLessThan(1000); // Ensuring the function completes within 1 second.
  });

  test("Handles maximum input size", () => {
    const particles = generateLargeInput(20000); // A helper function to generate a large input.
    const startTime = Date.now();
    findHiggs(particles);
    const endTime = Date.now();
    expect(endTime - startTime).toBeLessThan(1000); // Ensuring the function completes within 1 second.
  });
});

// Helper function for generating large input for performance testing
function generateLargeInput(size) {
  const particles = [];
  for (let i = 0; i < size; i++) {
    particles.push([
      randomInt(-1000000000, 1000000000),
      randomInt(-1000000000, 1000000000),
    ]);
  }
  return particles;
}

// Helper function to generate random integers within a range
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
