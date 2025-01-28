/**
 * [217. Contains Duplicates](https://leetcode.com/problems/contains-duplicate/description/)
 *
 * Given an integer array `nums`, return `true` if any value appears at least twice in the
 * array, and return `false` if every element is distinct.
 */
export function containsDuplicate(nums: number[]): boolean {
  if (nums.length === 1) {
    // O(1)
    return false;
  }

  // O(n log n)
  nums.sort((a, b) => a - b);
  let i = 0;

  // O(n)
  while (i < nums.length) {
    // O(1)
    if (nums[i] === nums[i - 1]) {
      return true;
    }

    i++;
  }

  return false;
}

function containsDuplicateWithSet(nums: number[]): boolean {
  // O(1)
  if (nums.length === 1) {
    return false;
  }

  const set = new Set<number>();

  // O(n)
  for (const num of nums) {
    // O(1)
    if (set.has(num)) {
      return true;
    }

    // O(1)
    set.add(num);
  }

  return false;
}
