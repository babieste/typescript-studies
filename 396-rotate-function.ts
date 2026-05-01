/**
 * # [396. Rotate Function](https://leetcode.com/problems/rotate-function/)
 *
 * ## Description
 *
 * You are given an integer array `nums` of length `n`.
 *
 * Assume `arr-k` to be an array obtained by rotating `nums` by `k` positions clock-wise.
 * We define the rotation function `F` on `nums` as follow:
 *
 * `F(k) = 0 * arrk[0] + 1 * arrk[1] + ... + (n - 1) * arrk[n - 1]`
 *
 * Return the maximum value of F(0), F(1), ..., F(n - 1).
 *
 * The test cases are generated so that the answer fits in a 32-bit integer.
 *
 * ### Constraints
 *
 * - `n == nums.length`
 * - `1 <= n <= 10^5`
 * - `-100 <= nums[i] <= 100`
 *
 * ## Reasoning
 *
 * A brute force approach would calculate F for every possible rotation, which can
 * be made `n` times. The function `F` iterates through every item in the array,
 * so it takes O(N). This means the brute force approach is `O(N^2)`.
 *
 * Given that, for an array [a, b, c, d]:
 *
 * F(0) = 0a + 1b + 2c + 3d
 * F(1) = 0d + 1a + 2b + 3c
 *
 * The difference between F(1) and F(0) is `a + b + c - 3d`, meaning that for an
 * array of length `n`, the difference is
 *
 * `F(1) - F(0) = (a0 + a1 + a2 + ... an-2) - (n - 1) * an-1`
 *
 * Thus, for k:
 *
 * `F(k) = F(k-1) + Total Sum - n * arr[n - 1 - k]`
 *
 * The optimized approach uses a memoization technique to store the results,
 * starting from the base case, F(0). Then, the maximum value is choosen.
 *
 * A better aproach would remove the necessity of the `dp` array and work only
 * with the current and maximum values for `F`, transforming the problems
 * space complexity from `O(N)` to `O(1)`.
 *
 */
function maxRotateFunction(nums: number[]): number {
    const n = nums.length;
    const sum = nums.reduce((acc, val) => (acc += val), 0);
    let f0 = 0;

    for (let i = 0; i < n; i++) {
        f0 += i * nums[i];
    }

    const dp = [f0];

    for (let i = 1; i < n; i++) {
        dp.push(dp[i - 1] + sum - nums[n - i] * n);
    }

    return Math.max(...dp);
}
