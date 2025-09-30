/**
 * ### [2221. Find Triangular Sum of Array](https://leetcode.com/problems/find-triangular-sum-of-an-array/)
 *
 * You are given a 0-indexed integer array `nums`, where `nums[i]` is a digit between 0 and 9 (inclusive).
 * The triangular sum of `nums` is the value of the only element present in `nums` after the following
 * process terminates:
 *
 * Let `nums` comprise of `n` elements. If `n == 1`, end the process. Otherwise, create a new 0-indexed
 * integer array newNums of length `n - 1`. For each index `i`, where `0 <= i < n - 1`, assign the value
 * of `newNums[i]` as `(nums[i] + nums[i+1]) % 10`, where `%` denotes modulo operator.
 *
 * Replace the array `nums` with `newNums`.
 * Repeat the entire process starting from step 1.
 * Return the triangular sum of `nums`.
 *
 * #### Reasoning
 * We can use JavaScript's array manipulation capabilities to iteratively reduce the array
 * until only one element remains. In each iteration, we compute the new values based on the
 * current array and update the array in place.
 *
 * #### Complexity Analysis
 * - Time Complexity: `O(n^2)` in the worst case, where `n` is the length of the input array.
 * - Space Complexity: `O(1)` since we are modifying the input array in place.
 */
export function triangularSum(nums: number[]): number {
    while (nums.length > 1) {
        for (let i = 0; i < nums.length - 1; i++) {
            nums[i] = (nums[i] + nums[i + 1]) % 10;
        }

        nums.length--;
    }

    return nums[0];
}
