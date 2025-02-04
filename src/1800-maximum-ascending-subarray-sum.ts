/**
 * [1800. Maximum Ascending Subarray Sum](https://leetcode.com/problems/maximum-ascending-subarray-sum/description/)
 *
 * Given an array of positive integers `nums`, return the maximum possible sum of an ascending subarray in `nums`.
 *
 * A subarray is defined as a contiguous sequence of numbers in an array.
 *
 * A subarray `[nums[l], nums[l + 1], ..., nums[r - 1], nums[r]]` is ascending
 * if for all `i` where `l <= i < r`, `nums[i]  < nums[i + 1]`.
 *
 * Note that a subarray of size 1 is ascending.
 *
 * Complexity
 * - Time complexity: We iterate through nums array once, so it's `O(n)`.
 * - Space complexity: We are using the auxiliary variables `maxSum`, `currSum`
 * and `j`, which do not depend on the size of the input. Thus our space
 * complexity is `O(1)`.
 *
 */
export function maxAscendingSum(nums: number[]): number {
  let maxSum = 0;
  let currSum = 0;
  let j = 0;

  while (j < nums.length) {
    if (j > 0 && nums[j] > nums[j - 1]) {
      currSum += nums[j];
    } else {
      currSum = nums[j];
    }

    if (currSum > maxSum) {
      maxSum = currSum;
    }

    j++;
  }

  return maxSum;
}
