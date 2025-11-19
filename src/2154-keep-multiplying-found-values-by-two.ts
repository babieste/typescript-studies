/**
 * ### [2154. Keep Multiplying Found Values by Two](https://leetcode.com/problems/keep-multiplying-found-values-by-two/)
 *
 * You are given an array of integers `nums`. You are also given an integer `original`
 * which is the first number that needs to be searched for in `nums`.
 *
 * You then do the following steps:
 * - If `original` is found in `nums`, multiply it by two (i.e., set `original = 2 * original`).
 * - Otherwise, stop the process.
 * - Repeat this process with the new number as long as you keep finding the number.
 *
 * Return the final value of original.
 *
 * #### Complexity Analysis
 * - Time complexity: `O(N)`, to populate the set and look for `original` in `nums`;
 * - Space complexity: `O(N)`, as we are using a set of size N.
 */
export function findFinalValue(nums: number[], original: number): number {
    const set = new Set(nums); // O(n)
    let len = nums.length;

    while (len > 0) {
        if (set.has(original)) {
            original = original * 2;
        }

        len--;
    }

    return original;
}
