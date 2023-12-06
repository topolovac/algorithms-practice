function applyFilter(width, height, filter, color) {
  switch (filter) {
    case 1:
      return inversionFilter(color);
    case 2:
      return blurFilter(width, height, color);
    default:
      throw new Error("Filter does not exist");
  }
}

function inversionFilter(color) {
  return color.map((row) => row.reverse());
}

function blurFilter(width, height, color) {
  const blurredArray = Array.from(color, (row) => Array.from(row));

  for (let i = 0; i < width; i++) {
    for (let j = 0; j < height; j++) {
      const colors = [
        getPixelColor(color, i - 1, j - 1), // top left corner
        getPixelColor(color, i, j - 1), // top
        getPixelColor(color, i + 1, j - 1), // top right corner
        getPixelColor(color, i - 1, j), // left
        getPixelColor(color, i + 1, j), // right
        getPixelColor(color, i - 1, j + 1), // bottom left corner
        getPixelColor(color, i, j + 1), // bottom
        getPixelColor(color, i + 1, j + 1), // bottom right corner
      ].filter((c) => c);

      let total = 0;
      for (let color of colors) {
        total += color;
      }

      blurredArray[j][i] = Math.round(total / colors.length);
    }
  }
  return blurredArray;
}

function getPixelColor(color, x, y) {
  if (!color || !color[y] || !color[y][x]) {
    return 0;
  }
  return color[y][x];
}

module.exports = applyFilter;
