
function howSum(targetSum, numbers, memo={}){
    if(targetSum in memo) return memo[targetSum];
    if(targetSum === 0) return [];
    if(targetSum < 0) return null;

    for(const num of numbers){
        const remainder = targetSum - num;
        const res = howSum(remainder, numbers, memo);
        if(res !== null){
            memo[targetSum] = [...res, num];
            return memo[targetSum];
        }
    }

    memo[targetSum] = null;
    return null;
} 


console.log(howSum(7, [2,3]));
console.log(howSum(7, [5, 4, 3, 7]));
console.log(howSum(7, [2, 4]));
console.log(howSum(8, [2, 3, 5]));
console.log(howSum(300, [7, 14]));
