const followPath = require("../followPath.js"); // Adjust based on your file structure

describe("followPath", () => {
  test("follows a simple path and records letters", () => {
    const gridMap = [
      "***            ",
      "  *            ",
      "  *            ",
      "  **c**od**i** ",
      "             * ",
      "    e        * ",
      "    *        n ",
      "    **m*a*g*** ",
      "               ",
      "               ",
    ];
    expect(followPath(gridMap)).toBe("codingame");
  });

  test("follows a path with only one letter", () => {
    const gridMap = [
      "*             ",
      "*****         ",
      "    *         ",
      "    *         ",
      "    *         ",
      "    *         ",
      "    *x******* ",
      "            * ",
      "            * ",
      "            * ",
    ];
    expect(followPath(gridMap)).toBe("x");
  });

  test("follows a path with letters at both start and end", () => {
    const gridMap = [
      "q*********    ",
      " *       *    ",
      " * ***** *    ",
      " * *   * *    ",
      " * * * * *    ",
      " * * * * *    ",
      " * * * * *    ",
      " * * * *u*    ",
      " * *   * *    ",
      " *** *** ***  ",
    ];
    expect(followPath(gridMap)).toBe("qu");
  });
});
