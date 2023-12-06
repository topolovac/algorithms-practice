function spell(numbers) {
  return numbers.reverse().filter((number) => number % 2 === 0);
}

module.exports = spell;
