/**
 * @see https://leetcode.com/problems/move-zeroes/
 * 
 * Given an integer array nums, move all 0's to the end of it while
 * maintaining the relative order of the non-zero elements.
 * 
 * Note that you must do this in-place without making a copy of the array.
 * 
 * Constraints:
 * - 1 <= nums.length <= 10^4
 * - -2^31 <= nums[i] <= 2^31 - 1
 */

/**
 Do not return anything, modify nums in-place instead.
 */
 function moveZeroes(nums: number[]): void {
    for(let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            let j = i + 1;
            while (j < nums.length) {
                if (nums[j] !== 0) {
                    const temp = nums[j];
                    nums[j] = nums[i];
                    nums[i] = temp;           
                    i++;
                }
                j++;
            }
        }
    }
};

export {}
