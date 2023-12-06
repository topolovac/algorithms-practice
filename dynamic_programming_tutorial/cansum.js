function canSum(targetSum, numbers, memo={}) {
    if(targetSum in memo) return memo[targetSum];
    if(targetSum === 0) return true; 
    if(targetSum < 0) return false;

    memo[targetSum] = numbers.some(number => canSum(targetSum - number, numbers, memo));
    return memo[targetSum];
}

console.log(canSum(7, [2,3]));
console.log(canSum(7, [5, 4, 3, 7]));
console.log(canSum(7, [2, 4]));
console.log(canSum(8, [2, 3, 5]));
console.log(canSum(300, [7, 14]));
