function findLargestSquare(matrix) {
  let largest = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j]) {
        const size = getSquareSize(matrix, j, i);
        if (size > largest) {
          largest = size;
        }
      }
    }
  }
  return largest;
}

function getSquareSize(matrix, x, y) {
  if (!matrix || matrix.length === 0) {
    return 0;
  }
  let size = 0;
  while (isSquare(matrix, x, y, size)) {
    size++;
  }
  return size;
}

function isSquare(matrix, x, y, size) {
  for (let i = y; i < y + size; i++) {
    for (let j = x; j <= x + size; j++) {
      if (!matrix || !matrix[i]) {
        return false;
      }
      if (!matrix[i][j]) {
        return false;
      }
    }
  }
  return true;
}

module.exports = {
  findLargestSquare,
  getSquareSize,
};
