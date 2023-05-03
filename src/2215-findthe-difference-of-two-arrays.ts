/**
 * Description: @see https://leetcode.com/problems/find-the-difference-of-two-arrays/description/
 *
 * Given two 0-indexed integer arrays `nums1` and `nums2`, return a list answer of size 2 where:
 * - `answer[0]` is a list of all distinct integers in `nums1` which are not present in `nums2`.
 * - `answer[1]` is a list of all distinct integers in nums2 which are not present in nums1.
 *
 * Note that the integers in the lists may be returned in any order.
 *
 * Constraints:
 * - `1 <= nums1.length, nums2.length <= 1000`
 * - `-1000 <= nums1[i], nums2[i] <= 1000`
 *
 * Complexity Analisys:
 * - Time complexity: Given `N` as the length of array `nums1` and `M` the length of array `nums2`,
 *   the time complexity is `O(N + M)`, since we iterate over both arrays filtering the numbers that
 *   are not present in one another.
 * - Space complexity: `O(max(N, M))`.
 */
export function findDifference(nums1: number[], nums2: number[]): number[][] {
  const result: number[][] = [];
  result[0] = [...new Set(nums1.filter((it) => nums2.indexOf(it) === -1))];
  result[1] = [...new Set(nums2.filter((it) => nums1.indexOf(it) === -1))];
  return result;
}
