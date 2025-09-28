/**
 * ### [976. Largest Perimeter Triangle](https://leetcode.com/problems/largest-perimeter-triangle/)
 *
 * Given an integer array nums, return the largest perimeter of a triangle
 * with a non-zero area, formed from three of these lengths. If it is
 * impossible to form any triangle of a non-zero area, return 0.
 *
 * #### Reasoning
 *
 * Triangle Inequality Theorem
 *
 * The triangle inequality theorem states that the length of the third
 * side of the triangle, C, is bound by the sum of the lengths of the
 * other two sides, A and B in which |A + B| = C = |A| + |B|. Given a
 * value C, we need to verify if there exists any two values A and B in
 * which C < A + B.
 *
 * To maximize the perimeter, we can sort the array in ascending order
 * and iterate from the end of the array to the beginning. For each value
 * C, we can check if the two previous values A and B satisfy the triangle
 * inequality theorem.
 *
 * #### Complexity Analysis
 *
 * - Time complexity: O(N log N) where N is the length of nums. This is
 * due to the sorting step.
 *
 * - Space complexity: O(1) since we are sorting the array in place and
 * using only a constant amount of extra space.
 */
export function largestPerimeter(nums: number[]): number {
    // Sort the array in ascending order.
    nums.sort((a, b) => a - b);
    let answer = 0;

    for (let i = nums.length - 1; i >= 0; i--) {
        const A = nums[i - 2];
        const B = nums[i - 1];
        const C = nums[i];

        if (C < A + B) {
            answer = A + B + C;
            break;
        }
    }

    return answer;
}
