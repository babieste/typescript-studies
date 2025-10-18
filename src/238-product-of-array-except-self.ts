/**
 * ### [238. Product of Array Except Self](https://leetcode.com/problems/product-of-array-except-self/)
 *
 * Given an integer array `nums`, return an array answer such that `answer[i]` is equal to the product
 * of all the elements of `nums` except `nums[i]`.
 *
 * The product of any prefix or suffix of `nums` is guaranteed to fit in a 32-bit integer.
 *
 * You must write an algorithm that runs in `O(n)` time and without using the division operation.
 *
 * #### Constraints
 * - `2 <= nums.length <= 10^5`
 * - `-30 <= nums[i] <= 30`
 * - The input is generated such that `answer[i]` is guaranteed to fit in a 32-bit integer.
 *
 * #### Reasoning
 *
 * The idea is that for each index `i`, the product of all elements except `nums[i]` can be
 * obtained by multiplying the product of all elements to the left of `i` (prefix product) with
 * the product of all elements to the right of `i` (suffix product).
 *
 */
export function productExceptSelf(nums: number[]): number[] {
    const result: number[] = [];
    let prefixProduct = 1;
    let suffixProduct = 1;

    for (let i = 0; i < nums.length; i++) {
        result.push(prefixProduct);
        prefixProduct = prefixProduct * nums[i];
    }

    for (let i = nums.length - 1; i >= 0; i--) {
        result[i] = result[i] * suffixProduct;
        suffixProduct = suffixProduct * nums[i];
    }

    return result;
}
