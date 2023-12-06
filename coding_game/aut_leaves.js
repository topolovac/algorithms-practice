function remainingLeaves(width, height, leaves, winds) {
  if(leaves.length === 0){
    return 0;
  }

  width = leaves[0].length;
  height = leaves.length;
  const direction = winds[0];
  let leavesOnEdges = 0;

  if (direction === "L" || direction === "R") {
    const edge = direction === "L" ? 0 : width - 1;
    for (let i = 0; i < height; i++) {
      if (leaves[i][edge]) {
        leavesOnEdges++;
      }
    }
  }

  if (direction === "U" || direction === "D") {
    const edge = direction === "U" ? 0 : height - 1;
    for (let i = 0; i < width; i++) {
      if (leaves[edge][i]) {
        leavesOnEdges++;
      }
    }
  }

  const totalLeaves = leaves.reduce((curr, row) => curr + row.filter(x => x).length ,0);
  const remaining = totalLeaves - leavesOnEdges;
  return remaining
}

module.exports = remainingLeaves;
