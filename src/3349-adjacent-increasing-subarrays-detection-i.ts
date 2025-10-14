/**
 * ### [3349. Adjacent Increasing Subarrays Detection I](https://leetcode.com/problems/adjacent-increasing-subarrays-detection-i)
 *
 * Given an array `nums` of integers and an integer `k`, determine whether there exist
 * two adjacent subarrays of length `k` such that both subarrays are strictly increasing.
 * Specifically, check if there are two subarrays starting at indices `a` and `b` (`a < b`),
 * where:
 * - Both subarrays `nums[a..a + k - 1]` and `nums[b..b + k - 1]` are strictly increasing.
 * - The subarrays must be adjacent, meaning `b = a + k`.
 *
 * Return `true` if it is possible to find two such subarrays, and `false` otherwise.
 *
 * #### Constraints
 * - `2 <= nums.length <= 100`
 * - `1 < 2 * k <= nums.length`
 * - `-1000 <= nums[i] <= 1000`
 *
 * #### Complexity Analysis
 * - Time Complexity: `O(n * k)`, where `n` is the length of the input array `nums`.
 *   - We iterate through the array with a sliding window approach, checking pairs of adjacent subarrays.
 *   - For each starting index, we check two subarrays of length `k`, leading to a total of `O(n * k)`.
 * - Space Complexity: `O(1)` as we are using a constant amount of extra space.
 */
export function hasIncreasingSubarrays(nums: number[], k: number): boolean {
    if (nums.length < k) {
        return false;
    }

    let i = 0;

    while (i < nums.length - k) {
        const a = isStrictlyIncreasing(nums, i, k);
        const b = isStrictlyIncreasing(nums, i + k, k);

        if (a && b) {
            return true;
        }

        i++;
    }

    return false;
}

function isStrictlyIncreasing(
    array: number[],
    startIndex: number,
    length: number
): boolean {
    for (let i = startIndex; i < startIndex + length - 1; i++) {
        if (i === array.length - 1) {
            return false;
        }

        if (array[i] >= array[i + 1]) {
            return false;
        }
    }

    return true;
}
