/**
 * ### [3741. Minimum Distance Between Three Equal Elements II](https://leetcode.com/problems/minimum-distance-between-three-equal-elements-ii/)
 *
 * You are given an integer array `nums`.
 *
 * A tuple `(i, j, k)` of 3 distinct indices is good if `nums[i] == nums[j] == nums[k]`.
 *
 * The distance of a good tuple is `abs(i - j) + abs(j - k) + abs(k - i)`, where `abs(x)`
 * denotes the absolute value of `x`.
 *
 * Return an integer denoting the minimum possible distance of a good tuple.
 * If no good tuples exist, return `-1`.
 *
 * ### Constraints
 *
 * - `1 <= n == nums.length <= 10^5`
 * - `1 <= nums[i] <= n`
 */
function minimumDistance(nums: number[]): number {
    // At least 3 values are required to form a tuple
    if (nums.length < 3) {
        return -1;
    }

    const valueOccurrence: Record<number, Array<number>> = {};

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];

        // For each value, store the index it apears
        valueOccurrence[num] ??= [];
        valueOccurrence[num].push(i);
    }

    let minimumDistance = Number.MAX_SAFE_INTEGER;

    for (const arr of Object.values(valueOccurrence)) {
        if (arr.length >= 3) {
            for (let i = 2; i < arr.length; i++) {
                let currentDistance = 0;
                currentDistance += Math.abs(arr[i - 2] - arr[i - 1]);
                currentDistance += Math.abs(arr[i - 1] - arr[i]);
                currentDistance += Math.abs(arr[i] - arr[i - 2]);

                if (currentDistance < minimumDistance) {
                    minimumDistance = currentDistance;
                }
            }
        }
    }

    if (minimumDistance < Number.MAX_SAFE_INTEGER) {
        return minimumDistance;
    }

    // No possible good tuple value exist
    return -1;
}
