/**
 * ## [2570. Merge Two 2D Arrays by Summing Values](https://leetcode.com/problems/merge-two-2d-arrays-by-summing-values/)
 *
 * You are given two 2D integer arrays `nums1` and `nums2`.
 *
 * `nums1[i] = [id, val]` indicate that the number with
 * the id `id` has a value equal to `val`.
 *
 * `nums2[i] = [id, val]` indicate that the number with
 * the id `id` has a value equal to `val`.
 *
 * Each array contains unique ids and is sorted in ascending
 * order by id. Merge the two arrays into one array that is
 * sorted in ascending order by id, respecting the following
 * conditions:
 * - Only ids that appear in at least one of the two arrays
 * should be included in the resulting array.
 * Each id should be included only once and its value should
 * be the sum of the values of this `id` in the two arrays.
 * If the `id` does not exist in one of the two arrays, then
 * assume its value in that array to be `0`.
 *
 * Return the resulting array. The returned array must be
 * sorted in ascending order by id.
 *
 * ### Complexity Analisys
 *
 * - Time complexity: We iterate over each array once, so `O(N + M)`.
 *
 * - Space complexity: We have an auxiliary array `answer` of length `O(N + M)`.
 */
export function mergeArraysWithTwoPointers(
  nums1: number[][],
  nums2: number[][]
): number[][] {
  const answer: number[][] = [];
  let i = 0;
  let j = 0;

  while (i < nums1.length || j < nums2.length) {
    if (i >= nums1.length) {
      answer.push([nums2[j][0], nums2[j][1]]);
      j++;
    } else if (j >= nums2.length) {
      answer.push([nums1[i][0], nums1[i][1]]);
      i++;
    } else {
      const [id1, value1] = nums1[i];
      const [id2, value2] = nums2[j];

      if (id1 < id2) {
        answer.push([id1, value1]);
        i++;
      } else if (id1 > id2) {
        answer.push([id2, value2]);
        j++;
      } else {
        answer.push([id1, value1 + value2]);
        i++;
        j++;
      }
    }
  }

  return answer;
}
