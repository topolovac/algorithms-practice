function adjustQuantities(persons, ingredients) {
  return ingredients.map((ingredient) => {
    const quantity = ingredient.split(" ")[0];
    return ingredient.replace(quantity, quantity * persons);
  });
}

module.exports = adjustQuantities;
