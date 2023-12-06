function solve(width, height, nbBlocks, grid) {
  const directions = {
    UP: [0, -1],
    DOWN: [0, 1],
    LEFT: [-1, 0],
    RIGHT: [1, 0],
  };
  for (let i = 0; i < nbBlocks; i++) {
    if (!existsInGrid(grid, i)) {
      continue;
    }
    for (let key in directions) {
      if (canMove(grid, width, height, i, directions[key])) {
        return i + " " + key;
      }
    }
  }
  return "0 UP";
}

function existsInGrid(grid, block) {
  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      if (Number(grid[i][j]) === block) {
        return true;
      }
    }
  }
  return false;
}

function canMove(grid, width, height, block, direction) {
  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      if (Number(grid[i][j]) === block) {
        exists = true;
        if (!move(grid, direction, block, j, i)) {
          return false;
        }
      }
    }
  }
  return true;
}

function move(grid, vector, block, x, y) {
  if (x < 0 || x >= grid[0].length || y < 0 || y >= grid.length) {
    return true;
  }
  if (grid[y][x] === String(block) || grid[y][x] === ".") {
    return move(grid, vector, block, x + vector[0], y + vector[1]);
  }
  return false;
}
