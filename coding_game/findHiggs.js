const tile_size = 1000;

function findHiggs(particles) {
  const tiles = {};
  for (let i = 0; i < particles.length; i++) {
    const [x, y] = particles[i];
    const key = getTileKey(x, y);
    const p = {
      index: i,
      x,
      y,
    };
    if (!tiles[key]) {
      tiles[key] = [p];
    } else {
      tiles[key].push(p);
    }
  }

  let smallest = {
    distance: Infinity,
  };

  for (const key in tiles) {
    const [x, y] = key.split("_");
    const grouped_tiles = [
      tiles[getTileKey(x - tile_size, y - tile_size)], // left top corner
      tiles[getTileKey(x, y - tile_size)], // top
      tiles[getTileKey(x + tile_size, y - 1)], // right top corner
      tiles[getTileKey(x - tile_size, y)], // left
      tiles[key], // center
      tiles[getTileKey(x + tile_size, y)], // right
      tiles[getTileKey(x - tile_size, y + tile_size)], // bottom left corner
      tiles[getTileKey(x, y + tile_size)], // bottom
      tiles[getTileKey(x + tile_size, y + tile_size)], // bottom right corner
    ].filter((x) => x);
    const pair = findClosest(grouped_tiles.flat());
    if (pair.distance < smallest.distance) {
      smallest = pair;
    }
  }

  return smallest.indexes;
}

function findClosest(particles) {
  let smallest = {
    distance: Infinity,
    indexes: [0, 0],
  };
  for (let i = 0; i < particles.length; i++) {
    const particle_a = particles[i];
    for (let j = i + 1; j < particles.length; j++) {
      const particle_b = particles[j];
      const distance = getDistance(particle_a, particle_b);
      if (smallest.distance > distance) {
        smallest = {
          indexes: [particle_a.index, particle_b.index].sort(),
          distance,
        };
      }
    }
  }
  return smallest;
}

function getDistance(pointA, pointB) {
  return Math.sqrt(
    Math.pow(pointA.x - pointB.x, 2) + Math.pow(pointA.y - pointB.y, 2)
  );
}

function getTileKey(x, y) {
  return `${Math.floor(x / tile_size)}_${Math.floor(y / tile_size)}`;
}

module.exports = findHiggs;
