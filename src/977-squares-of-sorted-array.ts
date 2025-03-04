/**
 * @link https://leetcode.com/problems/squares-of-a-sorted-array/
 * 
 * Given an integer array nums sorted in non-decreasing order,
 * return an array of the squares of each number sorted in
 * non-decreasing order.
 * 
 * Constraints:
 * - 1 <= nums.length <= 10^4
 * - -10^4 <= nums[i] <= 10^4
 * nums is sorted in non-decreasing order
 */

function sortedSquares(nums: number[]): number[] {
    return twoPointersSortedSquares(nums);
};

// O(n * log n) time complexity
// O(n) space complexity
function trivialSortedSquares(nums: number[]): number[] {
    return nums
        .map((num: number) => Math.pow(num, 2))
        .sort((a: number, b: number) => a - b);
}

// O(n * log n) time complexity
// O(1) space complexity
function inPlaceSortedSquares(nums: number[]): number[] {
    nums.forEach((num: number, index: number, array: number[]) => array[index] = Math.pow(num, 2))
    return nums.sort((a: number, b: number) => a - b);
}

// O(n) time complexity
// O(n) space complexity
function twoPointersSortedSquares(nums: number[]): number[] {
    let left = 0;
    let right = nums.length - 1;
    let pivot = right;
    const result: number[] = [];
    
    while (left <= right) {
        const leftSquare = Math.pow(nums[left], 2);
        const rightSquare = Math.pow(nums[right], 2);
        
        if (leftSquare > rightSquare) {
            result[pivot] = leftSquare;
            pivot--;
            left++;
        } else {
            result[pivot] = rightSquare;
            pivot--;
            right--;
        }
    }
    
    return result;
}

export {}