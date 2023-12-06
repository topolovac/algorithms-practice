function boundingRectangle(points) {
  const orderedPoints = points.sort((a, b) => a[0] < b[0] && a[1] < b[1]);

  const smallest = orderedPoints[0];
  const largest = orderedPoints[orderedPoints.length - 1];
  const width = largest[0] - smallest[0];
  const height = largest[1] - smallest[1];

  return [...smallest, width, height];
}

module.exports = boundingRectangle;
