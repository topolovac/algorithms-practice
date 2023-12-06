function solve(grid, rules) {
  const results = [];
  const result_map = createMap(rules);

  for (let i = 0; i < grid.length - 1; i++) {
    const arr = [];
    for (let j = 0; j < grid[0].length - 1; j++) {
      const group = [
        grid[i][j],
        grid[i][j + 1],
        grid[i + 1][j],
        grid[i + 1][j + 1],
      ];
      const hash = getHash(group);
      if (hash in result_map) {
        arr.push(result_map[hash]);
      } else {
        arr.push(0);
      }
    }
    results.push(arr);
  }

  return results;
}

function createMap(rules) {
  const map = {};
  rules.forEach((rule) => {
    map[getHash(rule.pattern)] = rule.result;
  });
  return map;
}

function getHash(array) {
  return array.join("");
}

const grid = [
  [1, 1, 1],
  [1, 1, 4],
  [1, 4, 6],
];

const rules = [
  { pattern: [1, 1, 1, 1], result: 5 },
  { pattern: [1, 1, 1, 4], result: 6 },
];

const expected = [
  [5, 6],
  [6, 0],
];

const result = solve(grid, rules);
console.log("Result:", result);
console.log("Expected:", expected);
