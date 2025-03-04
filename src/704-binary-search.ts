/**
 * @see https://leetcode.com/problems/binary-search/
 * 
 * Given an array of integers nums which is sorted in ascending order,
 * and an integer target, write a function to search target in nums.
 * If target exists, then return its index. Otherwise, return -1.
 * 
 * You must write an algorithm with O(log n) runtime complexity.
 * 
 * Constraints:
 * - 1 <= nums.length <= 10^4
 * - -10^4 < nums[i], target < 10^4
 * - All the integers in nums are unique
 * - nums is sorted in ascending order
 */

function search(nums: number[], target: number): number {
    return binarySearch(nums, 0, nums.length - 1, target);
};

function binarySearch(nums: number[], left: number, right: number, target: number): number {
    if (right >= left) {
        const pivot = Math.floor((left + right)/2);
    
        if (nums[pivot] === target) {
            return pivot;
        }

        if (nums[pivot] > target) {
            return binarySearch(nums, left, pivot - 1, target);
        }

        return binarySearch(nums, pivot + 1, right, target);
    }
    
    return -1;
}

export {}
