/**
 * ### [1. Two Sum](https://leetcode.com/problems/two-sum/)
 *
 * Given an array of integers `nums` and an integer `target`, return indices of
 * the two numbers such that they add up to `target`.
 *
 * You may assume that each input would have exactly one solution, and you may not
 * use the same element twice.
 *
 * You can return the answer in any order.
 *
 * #### Complexity Analysis
 * - Time Complexity: `O(n)`, where `n` is the number of elements in the input array.
 * - Space Complexity: `O(n)` for the hash map storing the elements and their indices.
 */
export function twoSum(nums: number[], target: number): number[] {
    const map = new Map<number, number>();

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];

        if (map.has(complement)) {
            return [map.get(complement)!, i];
        }

        map.set(nums[i], i);
    }

    return [];
}
