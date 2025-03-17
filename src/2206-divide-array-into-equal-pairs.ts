/**
 * ### [2206. Divide Array into Equal Pairs](https://leetcode.com/problems/divide-array-into-equal-pairs/)
 *
 * You are given an integer array `nums` consisting of `2 * n` integers.
 * You need to divide `nums` into `n` pairs such that:
 * - Each element belongs to exactly one pair.
 * - The elements present in a pair are equal.
 *
 * Return `true` if `nums` can be divided into `n` pairs, otherwise return `false`.
 */
export function divideArrayWithSorting(nums: number[]): boolean {
  nums.sort((a, b) => a - b); // O(log n)

  // O(n)
  for (let i = 0; i < nums.length; i = i + 2) {
    if (nums[i] !== nums[i + 1]) {
      return false;
    }
  }

  return true;
}
