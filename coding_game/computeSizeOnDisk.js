function computeSizeOnDisk(clusterSize, fileSize) {
  return Math.round(fileSize / clusterSize) * clusterSize;
}

module.exports = computeSizeOnDisk;
