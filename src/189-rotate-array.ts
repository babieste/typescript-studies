/**
 * @see https://leetcode.com/problems/rotate-array/
 * 
 * Juggling Algorithm
 * @link https://www.geeksforgeeks.org/array-rotation/
 * @link https://iq.opengenus.org/juggling-algorithm/
 * 
 * Given an array, rotate the array to the right by k steps, where k is non-negative.
 * 
 * Constraints:
 * - 1 <= nums.length <= 10^5
 * - -2^31 <= nums[i] <= 2^31 - 1
 * - 0 <= k <= 10^5
 */
function rotate(nums: number[], k: number): void {
    naiveSolution(nums, k);
};

function javaScriptIntuitiveSolution(nums: number[], k: number) {
    for(let i = 0; i < k; i++) {
        nums.unshift(nums.pop() as number);
    }
}

// O(1) space complexity
// O(k * n) time complexity
function naiveSolution(nums: number[], k: number) {
    for(let i = 0; i < k; i++) {
        const lastElement = nums[nums.length - 1];
        
        // Shift numbers forward
        for(let pos = nums.length - 1; pos > 0; pos--) {
            nums[pos] = nums[pos - 1];
        }
        
        nums[0] = lastElement;
    }
}

export {}
