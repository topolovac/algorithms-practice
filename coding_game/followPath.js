function followPath(grid) {
  const visited = ["0-0"];
  let position = {
    x: 0,
    y: 0,
  };
  return move(grid, position, visited);
}

function move(grid, position, visited = [], result = "") {
  const val = getValueFromPos(position, grid);
  if (!val) return result;

  if (val !== "*") {
    result += val;
  }

  visited.push(position.x + "-" + position.y);
  const nextPos = getNexPos(grid, position, visited);
  if (!nextPos) {
    return result;
  }
  return move(grid, nextPos, visited, result);
}

function getNexPos(grid, position, visited) {
  const possible_positions = [
    { x: position.x - 1, y: position.y }, // left
    { x: position.x + 1, y: position.y }, // right
    { x: position.x, y: position.y - 1 }, // top
    { x: position.x, y: position.y + 1 }, // down
  ];
  for (let pos of possible_positions) {
    const val = getValueFromPos(pos, grid);
    if (val && val.trim() && !isPosVisited(pos, visited)) {
      return pos;
    }
  }
  return null;
}

function getValueFromPos(position, grid) {
  if (!grid[position.y]) {
    return null;
  }
  return grid[position.y][position.x];
}

function isPosVisited(position, visited) {
  return visited.includes(position.x + "-" + position.y);
}

module.exports = followPath;
