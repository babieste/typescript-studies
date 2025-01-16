// how the count of each individual integers affects the final answer?
// we know that bitwise XOR on the same number results in zero (x ^ x = 0).
// if we do bitwise once again, it results in x.
// this means that if we do bitwise an odd number of times, we get the number itself
// if we do bitwise an even number of times, we get zero

// doing the bitwise XOR on all integers at once has the same result of doing the bitwise of
// the pairs and then the bitwise of the result.

// "if the length of nums1 is m and the length of nums2 is n, then each number in nums1 is
// repeated n times and each number in nums2 is repeated m times".
// this means that if the length is odd, then we have each number exactly once
// and if the length is even, then we have 0 length times.

/**
 * [2425. Bitwise XOR of All Pairings](https://leetcode.com/problems/bitwise-xor-of-all-pairings/description/?envType=daily-question&envId=2025-01-16)
 * You are given two 0-indexed arrays, `nums1` and `nums2`, consisting of non-negative integers.
 * There exists another array, `nums3`, which contains the bitwise XOR of all pairings of integers
 * between `nums1` and `nums2` (every integer in `nums1` is paired with every integer in `nums2` exactly once).
 *
 * Return the bitwise XOR of all integers in `nums3`.
 *
 * NOTE: This solution has a time complexity of O(m + n) and a space complexity of O(m + n).
 * A better approach would be to not store the numbers in an array `nums3`, but instead calculate
 * the bitwise operation directly in `result`. This would give us a space complexity of O(1).
 */
function xorAllNums(nums1: number[], nums2: number[]): number {
  // O(m + n)
  const m = nums1.length;
  const n = nums2.length;
  let nums3: number[] = [];

  // if nums1 length is even, then doing the bitwise XOR on each number in nums2
  // will result in zero
  if (m % 2 != 0) {
    nums3 = nums3.concat(nums2); // O(n)
  }

  // same for nums2
  if (n % 2 != 0) {
    nums3 = nums3.concat(nums1); // O(m)
  }

  let result = 0;

  for (let i = 0; i < nums3.length; i++) {
    // O(m + n)
    result ^= nums3[i];
  }

  return result;
}
