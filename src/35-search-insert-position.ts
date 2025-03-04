/**
 * @link https://leetcode.com/problems/search-insert-position/
 * 
 * Given a sorted array of distinct integers and a target value,
 * return the index if the target is found. If not, return the
 * index where it would be if it were inserted in order.
 * 
 * You must write an algorithm with O(log n) runtime complexity.
 * 
 * Constraints:
 * - 1 <= nums.length <= 10^4
 * - 10^4 <= nums[i] <= 10^4
 * - nums contains distinct values sorted in ascending order
 * - -10^4 <= target <= 10^4
 */

function searchInsert(nums: number[], target: number): number {
    return binarySearch(nums, 0, nums.length - 1, target);
};

function binarySearch(nums: number[], left: number, right: number, target: number): number {
    if (left <= right) {
        const pivot = left + Math.floor((right - left)/2);
        
        if (nums[pivot] === target) {
            return pivot;
        }
        
        if (nums[pivot] > target) {
            return binarySearch(nums, left, pivot - 1, target);
        }
        
        return binarySearch(nums, pivot + 1, right, target);
    }
    
    return left;
}

export {}
