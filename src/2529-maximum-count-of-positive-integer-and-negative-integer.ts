/**
 * [2529. Maximum Count of Positive Integer and Negative Integer](https://leetcode.com/problems/maximum-count-of-positive-integer-and-negative-integer/description/)
 *
 * Given an array `nums` sorted in non-decreasing order, return the maximum
 * between the number of positive integers and the number of negative integers.
 *
 * In other words, if the number of positive integers in `nums` is `pos` and
 * the number of negative integers is `neg`, then return the maximum of `pos`
 * and `neg`.
 *
 * Note that `0` is neither positive nor negative.
 */
export function maximumCountWithBinarySearch(nums: number[]): number {
  const positiveCount = nums.length - upperBound(nums);
  const negativeCount = lowerBound(nums);
  return Math.max(positiveCount, negativeCount);
}

/** Returns the first index where the value is equal to or greater than zero. */
function lowerBound(nums: number[]): number {
  let low = 0,
    high = nums.length - 1;
  let index = nums.length;

  while (low <= high) {
    const middle = (low + high) >> 1;

    if (nums[middle] < 0) {
      low = middle + 1;
    } else if (nums[middle] >= 0) {
      high = middle - 1;
      index = middle;
    }
  }

  return index;
}

/** Returns the first index where the value is greater than zero. */
function upperBound(nums: number[]): number {
  let low = 0,
    high = nums.length - 1;
  let index = nums.length;

  while (low <= high) {
    const middle = (low + high) >> 1;

    if (nums[middle] <= 0) {
      low = middle + 1;
    } else if (nums[middle] > 0) {
      high = middle - 1;
      index = middle;
    }
  }

  return index;
}
