/**
 * @see https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/
 * 
 * Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order,
 * find two numbers such that they add up to a specific target number. Let these two numbers
 * be numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length.
 * 
 * Return the indices of the two numbers, index1 and index2, added by one as an integer
 * array [index1, index2] of length 2.
 * 
 * Your solution must use only constant extra space.
 * 
 * Constraints:
 * - 2 <= numbers.length <= 3 * 10^4
 * - -1000 <= numbers[i] <= 1000
 * - numbers is sorted in non-decreasing order
 * - -1000 <= target <= 1000
 * - The tests are generated such that there is exactly one solution
 * 
 */

function twoSum(numbers: number[], target: number): number[] {
    for(let i = 0; i < numbers.length; i++) {
        const x = target - numbers[i];
        const xIndex = numbers.findIndex((num: number, index: number) => num === x && index !== i);
        if (xIndex !== -1) {
            return [i+1, xIndex+1];
        }
    }

    return [];
};

export {}
