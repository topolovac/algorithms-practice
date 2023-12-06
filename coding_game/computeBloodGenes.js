const phenotypeMap = {
  A: ["AA", "AO"],
  B: ["BB", "BO"],
  AB: ["AB"],
  O: ["OO"],
};

function computeBloodGenes(parent1, parent2, child) {
  const parent_1_combinations = phenotypeMap[parent1];
  const parent_2_combinations = phenotypeMap[parent2];
  const child_combination = phenotypeMap[child];

  let possible_combinations = [];
  for (let p1_comb of parent_1_combinations) {
    for (let p2_comb of parent_2_combinations) {
      if (isCombinationPossible(p1_comb, p2_comb, child_combination)) {
        possible_combinations.push([p1_comb, p2_comb]);
      }
    }
  }

  return possible_combinations.length > 0
    ? possible_combinations
    : [["--", "--"]];
}

function isCombinationPossible(gene_comb_1, gene_comb_2, child_combinations) {
  const genes_1 = gene_comb_1.split("");
  const genes_2 = gene_comb_2.split("");

  for (let gene_1 of genes_1) {
    for (let gene_2 of genes_2) {
      if (
        child_combinations.includes(gene_1 + gene_2) ||
        child_combinations.includes(gene_2 + gene_1)
      ) {
        return true;
      }
    }
  }

  return false;
}

module.exports = computeBloodGenes;
