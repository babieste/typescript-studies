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

export function twoSum(numbers: number[], target: number): number[] {
    for (let i = 0; i < numbers.length; i++) {
        const x = target - numbers[i];
        const xIndex = numbers.findIndex(
            (num: number, index: number) => num === x && index !== i
        );
        if (xIndex !== -1) {
            return [i + 1, xIndex + 1];
        }
    }

    return [];
}

/**
 * #### Reasoning
 *
 * The binary search algorithm can be applied to the Two Sum II problem
 * as follows: given a value numbers[i], we aim to find the corresponding
 * `value` that sums up to `target`. The find algorithm is where binary
 * search is applied, since the input array is ordered.
 *
 * #### Complexity Analysis
 * - Time Complexity: `O(n log n)`
 * - Space Complexity: `O(1)`
 */
export function binarySearchTwoSum(
    numbers: number[],
    target: number
): number[] {
    const n = numbers.length;
    let i = 0;

    for (let i = 0; i < n; i++) {
        let left = i + 1;
        let right = n - 1;

        const value = target - numbers[i];

        while (left <= right) {
            const middle = Math.floor(left + (right - left) / 2);

            if (numbers[middle] === value) {
                return [i + 1, middle + 1];
            } else if (numbers[middle] > value) {
                right = middle - 1;
            } else {
                left = middle + 1;
            }
        }
    }

    return [];
}
