/**
 * You are given an integer array `nums` and an integer `target`.
 * You want to build an expression out of `nums` by adding one of the symbols '+' and '-'
 * before each integer in `nums` and then concatenate all the integers.
 * 
 * For example, if `nums = [2, 1]`, you can add a '+' before 2 and a '-' before 1 and
 * concatenate them to build the expression "+2-1".
 * 
 * Return the number of different expressions that you can build, which evaluates to target.
 */
function findTargetSumWaysBruteForce(nums: number[], target: number): number {
    const n = nums.length;
    
    function f(i: number, currentSum: number): number {
        if (i === n) {
            if (currentSum === target) {
                return 1;
            }

            return 0;
        }

        return f(i + 1, currentSum + nums[i]) + f(i + 1, currentSum - nums[i]);
    }

    return f(0, 0);
};