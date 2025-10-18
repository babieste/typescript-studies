/**
 * ### [3397. Maximum Number of Distinct Elements After Operations](https://leetcode.com/problems/maximum-number-of-distinct-elements-after-operations/)
 *
 * You are given an integer array `nums` and an integer `k`.
 *
 * You are allowed to perform the following operation on each element of the array at most once:
 * - Add an integer in the range `[-k, k]` to the element.
 *
 * Return the maximum possible number of distinct elements in `nums` after performing the operations.
 *
 * #### Constraints
 * - `1 <= nums.length <= 10^5`
 * - `1 <= nums[i] <= 10^9`
 * - `0 <= k <= 10^9`
 *
 * #### Complexity Analysis
 * - Time Complexity: O(N log N) where N is the length of `nums` due to sorting.
 * - Space Complexity: O(1).
 */
export function maxDistinctElements(nums: number[], k: number): number {
    nums.sort((a, b) => a - b); // n log n
    let count = 1; // starts at 1 bc nums[0] is always distinct

    for (let i = 0; i < nums.length; i++) {
        if (i === 0) {
            nums[i] = nums[i] - k;
        } else {
            // the smallest valid value is going to be the maximum between
            // subtracking k from nums[i] and the previous value + 1
            const smallestValidValue = Math.max(nums[i] - k, nums[i - 1] + 1);
            nums[i] = Math.min(smallestValidValue, nums[i] + k);

            if (nums[i] > nums[i - 1]) {
                count++;
            }
        }
    }

    return count;
}
