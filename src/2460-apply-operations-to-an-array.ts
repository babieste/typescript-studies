/**
 * ### [2460. Apply Operations to an Array](https://leetcode.com/problems/apply-operations-to-an-array/)
 *
 * You are given a 0-indexed array `nums` of size `n` consisting of non-negative integers.
 *
 * You need to apply `n - 1` operations to this array where, in the `ith` operation (0-indexed), you
 * will apply the following on the `ith` element of `nums`:
 * - If `nums[i] == nums[i + 1]`, then multiply `nums[i]` by `2` and set `nums[i + 1]` to `0`. Otherwise,
 * you skip this operation.
 *
 * After performing all the operations, shift all the `0`'s to the end of the array.
 *
 * For example, the array `[1,0,2,0,0,1]` after shifting all its `0`'s to the end, is `[1,2,1,0,0,0]`.
 *
 * Return the resulting array.
 *
 * #### Complexity Analysis
 *
 * Time complexity: O(n)
 *
 * Space complexity: O(1)
 *
 */
export function applyOperations(nums: number[]): number[] {
  for (let i = 0; i < nums.length - 1; i++) {
    // O(n)
    if (nums[i] === nums[i + 1]) {
      nums[i] *= 2;
      nums[i + 1] = 0;
    }
  }

  let i = 0;
  let j = nums.length - 1;

  while (i < j) {
    if (nums[i] === 0) {
      for (let k = i; k < j; k++) {
        const aux = nums[k];
        nums[k] = nums[k + 1];
        nums[k + 1] = aux;
      }

      i--;
      j--;
    }

    i++;
  }

  return nums;
}
