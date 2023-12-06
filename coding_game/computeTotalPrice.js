function computeTotalPrice(unitPrice, macarons) {
  const sets = [];
  for (let macaron of macarons) {
    const set = getAvailableSet(sets, macaron);
    sets[set].push(macaron);
  }

  let sum = 0;
  for (const set of sets) {
    const raw_price = set.length * unitPrice;
    const discout = (set.length - 1) / 10;
    sum += Math.floor(raw_price - raw_price * discout);
  }
  return sum;
}

function getAvailableSet(sets, macaron) {
  for (let i = 0; i < sets.length; i++) {
    if (sets[i].length < 5 && !sets[i].includes(macaron)) {
      return i;
    }
  }
  sets.push([]);
  return sets.length - 1;
}

module.exports = computeTotalPrice;
