function gridTraveler(m, n, memo = {}) {
  const memo_key = `${m}-${n}`;
  if (memo_key in memo) return memo[memo_key];
  if (m < 1 || n < 1) return 0;
  if (m === 1 && n === 1) return 1;

  memo[memo_key] = gridTraveler(m - 1, n, memo) + gridTraveler(m, n - 1, memo);
  memo[`${n}-${m}`] = memo[memo_key];
  return memo[memo_key];
}

console.log(gridTraveler(18, 18));
