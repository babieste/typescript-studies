/**
 * ### [3350. Adjacent Increasing Subarrays Detection II](https://leetcode.com/problems/adjacent-increasing-subarrays-detection-ii/)
 *
 * Given an array `nums` of `n` integers, your task is to find the maximum value of `k`
 * for which there exist two adjacent subarrays of length `k` each, such that both subarrays
 * are strictly increasing. Specifically, check if there are two subarrays of length `k`
 * starting at indices `a` and `b` (`a < b`), where:
 * - Both subarrays `nums[a..a + k - 1]` and `nums[b..b + k - 1]` are strictly increasing.
 * The subarrays must be adjacent, meaning `b = a + k`.
 *
 * Return the maximum possible value of k.
 *
 * #### Reasoning
 * To solve this problem, we can use a dynamic programming approach to keep track of the lengths
 * of increasing subarrays ending at each index. We can then iterate through the array to find
 * pairs of adjacent increasing subarrays and calculate the maximum length `k` for which such pairs exist.
 *
 * #### Complexity Analysis
 * - Time Complexity: O(n), where n is the length of the input array. We traverse the array a constant number of times.
 * - Space Complexity: O(n), for storing the lengths of increasing subarrays in the dp array.
 */
export function maxIncreasingSubarrays(nums: number[]): number {
    const n = nums.length;

    if (n < 2) {
        return 0;
    }

    // dp[i] represents the length of the longest increasing subarray ending at i
    const dp = new Array(n).fill(1);

    for (let i = 1; i < n; i++) {
        if (nums[i] > nums[i - 1]) {
            dp[i] = dp[i - 1] + 1;
        }
    }

    let secondSubarrayLength = 1;
    let maxK = 1;

    for (let i = n - 2; i > 0; i--) {
        if (nums[i] < nums[i + 1]) {
            secondSubarrayLength += 1;
        } else {
            secondSubarrayLength = 1;
        }

        const kAtSplit = Math.min(dp[i - 1], secondSubarrayLength);
        maxK = Math.max(maxK, kAtSplit);
    }

    return maxK;
}

export function iteractiveMaxIncreasingSubarrays(nums: number[]): number {
    const n = nums.length;
    // Since we want two subarrays of equal length `k`,
    // the maximum value `k` can have is half of the
    // full array length.
    const maxPossibleK = Math.floor(n / 2);

    for (let k = maxPossibleK; k > 0; k--) {
        // Since the two subarrays together have length 2*k,
        // The maximum possible value for the first subarray
        // starting index is `n - 2*k`.
        const maxPossibleIndex = n - 2 * k;

        for (let i = 0; i <= maxPossibleIndex; i++) {
            const a = isStrictlyIncreasing(nums, i, k);
            const b = isStrictlyIncreasing(nums, i + k, k);

            if (a && b) {
                return k;
            }
        }
    }

    return 0;
}

function isStrictlyIncreasing(
    array: number[],
    startIndex: number,
    length: number
): boolean {
    for (let i = startIndex; i < startIndex + length - 1; i++) {
        if (array[i] >= array[i + 1]) {
            return false;
        }
    }

    return true;
}
