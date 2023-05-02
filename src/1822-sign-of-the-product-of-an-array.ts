/**
 * Description: @see https://leetcode.com/problems/sign-of-the-product-of-an-array/
 *
 * There is a function `signFunc(x)` that returns:
 * - `1` if `x` is positive.
 * - `-1` if `x` is negative.
 * - `0` if `x` is equal to `0`.
 *
 * You are given an integer array `nums`. Let `product` be the product of all values
 * in the array `nums`. Return `signFunc(product)`.
 *
 * Constraints:
 * - `1 <= nums.length <= 1000`
 * - `-100 <= nums[i] <= 100`
 *
 * Complexity Analisys:
 * - Time complexity: `O(n)`, we iterate over the array once.
 * - Space complexity: `O(1)`, we use constant extra space.
 */

export function arraySign(nums: number[]): number {
  if (nums.includes(0)) {
    return 0;
  }

  return nums.reduce(
    (sign, currentValue) => (sign * currentValue > 0 ? 1 : -1),
    1
  );
}
